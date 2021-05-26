import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./login/login.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { FinanceComponent } from "./finance/finance.component";
import { CashierComponent } from "./cashier/cashier.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent,
    InventoryComponent,
    FinanceComponent,
    CashierComponent,
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
