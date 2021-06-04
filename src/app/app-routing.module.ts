import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierComponent } from './_components/cashier/cashier.component';
import { FinanceComponent } from './_components/finance/finance.component';
import { InventoryComponent } from './_components/inventory/inventory.component';
import { CreateUserComponent } from './_components/owner/create-user/create-user.component';
import { OwnerComponent } from './_components/owner/owner.component';
import { LoginComponent } from './_components/login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "owner",
    component: OwnerComponent,
  },
  {
    path: "owner/create-account",
    component: CreateUserComponent,
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
