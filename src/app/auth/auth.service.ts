import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import Swal from "sweetalert2";
import { Suplier } from "../model/Suplier";

const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;
  private logToken: any;
  private tokenTimer: any;
  private userId: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return localStorage.getItem('access_token');
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
  signupSupplier(suplier : any) {
    return this.http.post<any>(`${apiURL}inventory/suplier`,suplier);
  }
  login(data: any) {
    console.log(data);
    this.http.put<{logToken: string}>(`${apiURL}/login`, data).subscribe(
      (response: any) => {
        this.logToken = response.data.logToken;
        localStorage.setItem("access_token", response.data.logToken);
        if (response.success) {
          const expiresInDuration = response.data.expiresIn;
          
          this.isAuthenticated = true;
          this.userId = response.data.User;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date( now.getTime() + expiresInDuration * 1000);
      
          this.router.navigate(['/user/inventory']);
        }
        

        Swal.fire("Success", "Login success..", "success");
      },
      
    );
    
  }
  
}
