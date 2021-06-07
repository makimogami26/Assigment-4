import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiURL: string = environment.ApiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public localStorage: any;
  public isLoggedIn = true || false;
  public userRole: any;
  public loginStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    console.log('cari token');

    return localStorage.getItem('access_token');
  }
  getIsAuth() {
    return this.isLoggedIn;
  }
  getUserId() {
    return this.userRole;
  }
  getAuthStatusListener() {
    return this.loginStatusListener.asObservable();
  }
  login(reqBody: any) {
    return this.http.put<{ logToken: string }>(`${apiURL}/login`, reqBody);
  }
  forgetPassword(reqBody: any) {
    return this.http.put<{ logToken: string }>(`${apiURL}/login/forget-password`, reqBody);
  }
  resetPassword(user_id: any, superkey: any, reqBody: any) {
    return this.http.put<{ logToken: string }>(`${apiURL}/login/reset-password/${user_id}/${superkey}`, reqBody);
  }
  get isLogin() {
    let token = localStorage.getItem('access_token');
    if (token != null) {
      return true;
    } else return false;
  }
  logout() {
    let clearToken = localStorage.removeItem('access_token');
    if (clearToken == null) {
      this.router.navigate(['login']);
    };
    return this.http.delete(`${apiURL}/logout`);
  }
}
