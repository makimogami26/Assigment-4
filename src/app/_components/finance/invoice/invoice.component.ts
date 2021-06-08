import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/_models/Invoice';
import { AuthService } from 'src/app/_services/auth.service';
import { FinanceService } from 'src/app/_services/finance.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  title = 'Custom Search';
  searchText: any;
  invoice! : Invoice[];
  constructor(private http: HttpClient,
    private financeService: FinanceService,
    public router: Router) { }

  ngOnInit(): void {
    this.financeService.getInvoice().subscribe((Invoice) => {
      this.invoice = Invoice;
    });
  }
}
