import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public localStorage: any;
  public isLoggedIn = true || false;
  public userRole: any;
  public loginStatusListener = new Subject<boolean>();
  constructor(private router: Router) {}

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
    }
  }
}
