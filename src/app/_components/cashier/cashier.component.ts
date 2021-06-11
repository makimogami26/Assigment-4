import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { CashierService } from 'src/app/_services/cashier.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css'],
})
export class CashierComponent implements OnInit {
  constructor(private authService: AuthService, private cashierService: CashierService) {}

  isLogin(){
    this.authService.getIsLogin()
  }

  ngOnInit(): void {
    this.cashierService.getAddToCart();
    this.cashierService.getSearchProduct();
    this.cashierService.getSearchProduct();
  }

  logout() {
    this.authService.logout();
  }
}
