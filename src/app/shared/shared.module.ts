import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { FormProductComponent } from "./form-product/form-product.component";
import { FormSupplierComponent } from "./form-supplier/form-supplier.component";
import { SupplierComponent } from "./supplier/supplier.component";
import { PurchaseOrderComponent } from "./purchase-order/purchase-order.component";
import { FormPurchaseOrderComponent } from "./form-purchase-order/form-purchase-order.component";
import { InvoiceComponent } from "./invoice/invoice.component";

@NgModule({
  declarations: [
    ProductComponent,
    FormProductComponent,
    FormSupplierComponent,
    SupplierComponent,
    PurchaseOrderComponent,
    FormPurchaseOrderComponent,
    InvoiceComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProductComponent,
    FormProductComponent,
    FormSupplierComponent,
    FormPurchaseOrderComponent,
    SupplierComponent,
    InvoiceComponent,
    PurchaseOrderComponent,
  ],
})
export class SharedModule {}
