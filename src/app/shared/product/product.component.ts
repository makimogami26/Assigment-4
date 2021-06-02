import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service'
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : Product[] = []
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe((Product) => {
      this.product = Product;
    })
  }

}
