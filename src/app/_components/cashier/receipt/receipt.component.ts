import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { Receipt } from 'src/app/_models/Receipt';
import { ReceiptService } from 'src/app/_services/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  private authStatusSub = new Subscription();
  receiptCheckout!: Receipt[];

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.authStatusSub = this.receiptService.getCheckout().subscribe((Receipt)=>{
      this.receiptCheckout = Receipt;
    });
  }

}
