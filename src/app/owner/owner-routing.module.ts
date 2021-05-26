import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OwnerComponent } from "./owner/owner.component";
const routes: Routes = [
  {
    path: "owner",
    component: OwnerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
