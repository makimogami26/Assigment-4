import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public localStorage: any;
  public isLoggedIn = true || false;
  public userRole: any;
  public loginStatusListener = new Subject<boolean>();
  constructor() { }

  getToken() {
    return localStorage.getItem("access_token");
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
}
