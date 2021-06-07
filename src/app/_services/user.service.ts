import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private auth: AuthService) { }
  changeEmailOrUsername(data: any) {

  }
  changePassord (data: any) {

  }
}
