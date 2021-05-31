import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


const apiURL: string = environment.ApiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  login(data : any){
    console.log(data)
    this.http.put(`${apiURL}/login`, data).subscribe((response: any) => {

})
  }
}