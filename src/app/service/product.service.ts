import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/model/Product";
import { Observable } from "rxjs";

import { first, flatMap, map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private product$: Observable<Product[]>;
  private baseUrl: "https://acongkelontong-api.herokuapp.com/product";

  getProduct() {
    return this.http
      .get<any>("https://acongkelontong-api.herokuapp.com/inventory/product")
      .pipe(
        map((res) => {
          return res.data || {};
          // const result = res.data;
          // result.forEach((item) => {
          //   console.log(item);
          // });
        })
      );
  }
}
