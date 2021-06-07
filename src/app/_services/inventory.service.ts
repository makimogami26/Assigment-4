import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
const apiURL: string = environment.ApiUrl;
import { map } from "rxjs/operators";

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
  addProduct(data:any){
    return this.http.post<any>(`${apiURL}/inventory/product` ,  data);
  }
  addSupplier(data: any){
    return this.http.post<any>(`${apiURL}/inventory/purchase-order` , data);
  }
  getProduct(){
    return this.http
    .get<any>(`${apiURL}/inventory/product`).pipe(map((res) => {
      return res.data || {};
    })
    );
  }
}

