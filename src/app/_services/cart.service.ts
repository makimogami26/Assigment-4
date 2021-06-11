import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiURI: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getListCart(){
    return this.http.get<any>(`${apiURI}/cashier/cart`).pipe(
      map((res)=>{
        return res.data || {}
      })
    )
  }

  getCancelItem(){
    return this.http.get<any>(`${apiURI}/cashier/cart/:cart_id`)
  }

}
