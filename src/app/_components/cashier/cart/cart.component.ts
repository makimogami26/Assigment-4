import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/_models/Cart';
import { CashierService } from 'src/app/_services/cashier.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  listCart!: Cart[];

  constructor(private cashierService: CashierService) {}

  ngOnInit(): void {
    this.cashierService.getListCart().subscribe((Cart) => {
      this.listCart = Cart;
    });
  }
}
