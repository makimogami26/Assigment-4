import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import Swal from "sweetalert2";

const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private userId: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return this.token;
  }
  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login(data: any) {
    console.log(data);
    this.http.put(`${apiURL}/login`, data).subscribe(
      (response: any) => {
        this.token = response.data.Authorization;
        localStorage.setItem("token", response.data.Authorization);
        if (response.success) {
          const expiresInDuration = response.data.expiresIn;

          this.isAuthenticated = true;
          this.userId = response.data.User;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );

          this.router.navigate(["/owner/owner"]);
        }

        Swal.fire("Success", "Login success..", "success");
      },
      (error) => {
        if (error.error.error.name === "Email not Registered") {
          Swal.fire({
            icon: "error",
            title: "Gagal login..",
            text: "Email belum terdaftar",
          });
        }

        if (error.error.error.name === "Invalid Password") {
          Swal.fire({
            icon: "error",
            title: "Gagal login..",
            text: "Password salah",
          });
        }

        if (error.error.error.name === "Password is Required") {
          Swal.fire({
            icon: "error",
            title: "Gagal login..",
            text: "Password tidak boleh kosong",
          });
        }
      }
    );
  }
}
