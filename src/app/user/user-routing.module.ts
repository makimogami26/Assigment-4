import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CashierComponent } from "./cashier/cashier.component";
import { FinanceComponent } from "./finance/finance.component";
import { InventoryComponent } from "./inventory/inventory.component";

const routes: Routes = [
  {
    path: "inventory",
    component: InventoryComponent,
  },
  {
    path: "cashier",
    component: CashierComponent,
  },
  {
    path: "finance",
    component: FinanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
