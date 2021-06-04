import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient) {}

  getSupplier() {
    return this.http
      .get<any>("https://acongkelontong-api.herokuapp.com/inventory/suplier")
      .pipe(
        map((res) => {
          return res.data || {};
        })
      );
  }
}