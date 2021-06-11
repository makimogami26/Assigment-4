import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/_models/Cart';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  listCart!: Cart[];
  private authStatusSub = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.authStatusSub = this.cartService.getListCart().subscribe((Cart) => {
      this.listCart = Cart;
    });
    this.cartService.getCancelItem();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
