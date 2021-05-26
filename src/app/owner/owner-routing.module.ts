import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OwnerComponent } from "./owner/owner.component";
import { RegisterComponent } from "./register/register.component";
const routes: Routes = [
  {
    path: "owner",
    component: OwnerComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
