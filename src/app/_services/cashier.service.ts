import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiURL: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class CashierService {
  constructor(private http: HttpClient) {}

  getAddToCart() {
    return this.http.get<any>(`${apiURL}/cashier/product`).pipe(
      map((res) => {
        return res.data || {};
      })
    );
  }

  getSearchProduct() {
    return this.http.get<any>(`${apiURL}/cashier/product`).pipe(
      map((res) => {
        return res.data || {};
      })
    );
  }

  getaddToCartManual() {
    return this.http.get<any>(`${apiURL}/cashier/product:product_id`).pipe(
      map((res) => {
        return res.data || {};
      })
    );
  }

}
