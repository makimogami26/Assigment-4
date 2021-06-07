import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  login(reqBody: any) {
    return this.http.put<{ logToken: string }>(`${apiURL}/login`, reqBody);
  }
  forgetPassword(reqBody: any) {
    return this.http.put<{ logToken: string }>(`${apiURL}/login/forget-password`, reqBody);
  }
  resetPassword(user_id: any, superkey: any, reqBody: any) {
    return this.http.put<{ logToken: string }>(`${apiURL}/login/reset-password/${user_id}/${superkey}`, reqBody);
  }
  logout() {
    return this.http.delete(`${apiURL}/logout`);
  }
}
