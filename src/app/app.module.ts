import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './_components/shared/shared.component';
import { UserComponent } from './_components/user/user.component';
import { OwnerComponent } from './_components/owner/owner.component';
import { LoginComponent } from './_components/login/login.component';
import { ForgetPasswordComponent } from './_components/forget-password/forget-password.component';
import { InventoryComponent } from './_components/inventory/inventory.component';
import { PurchaseOrderComponent } from './_components/inventory/purchase-order/purchase-order.component';
import { FinanceComponent } from './_components/finance/finance.component';
import { InvoiceComponent } from './_components/finance/invoice/invoice.component';
import { TopTenComponent } from './_components/owner/top-ten/top-ten.component';
import { CreateProductComponent } from './_components/inventory/create-product/create-product.component';
import { AddSuplierComponent } from './_components/inventory/add-suplier/add-suplier.component';
import { CreateUserComponent } from './_components/owner/create-user/create-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuplierDetailsComponent } from './_components/inventory/suplier-details/suplier-details.component';
import { CashierComponent } from './_components/cashier/cashier.component';
import { AuthService } from './_services/auth.service';
import { AuthInterceptor } from './_services/auth.interceptor';
import { ProductListComponent } from './_components/shared/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    UserComponent,
    OwnerComponent,
    LoginComponent,
    ForgetPasswordComponent,
    InventoryComponent,
    PurchaseOrderComponent,
    FinanceComponent,
    InvoiceComponent,
    TopTenComponent,
    CreateProductComponent,
    AddSuplierComponent,
    CreateUserComponent,
    SuplierDetailsComponent,
    CashierComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,{provide : HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
