import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient, private auth: AuthService ) { }
  addSuplier(data: any) {
    console.log("ok2")
    console.log(data)
    return this.http.post<any>(`${apiURL}/inventory/suplier`, data);
  }
}

