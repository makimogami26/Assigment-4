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
  constructor(private http: HttpClient, private auth: AuthService) {}

  login(data: any) {
    console.log(data);
    console.log('cek url', apiURL);
    return this.http.put<{ logToken: string }>(`${apiURL}/login`, data);
  }

  logout() {
    return this.http.patch(`${apiURL}/logout`, this.auth.getToken);
  }
}
