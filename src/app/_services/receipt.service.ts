import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const apiURI: string = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  
  constructor(private http: HttpClient) { }

  getCheckout(){
    return this.http.get<any>(`${apiURI}/cashier/receipt`).pipe(
      map((res)=>{
        return res.data || {};
      })
    );
  }
}
