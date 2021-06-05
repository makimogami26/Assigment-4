import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }
  createUser(data: any, url: any) {
    console.log(data);
    console.log("cek url", apiURL);
    return this.http.post<{ logToken: string }>(`${apiURL}/owner/create-user`, data, url)
  }
}


