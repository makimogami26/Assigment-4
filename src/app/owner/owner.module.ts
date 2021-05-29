import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OwnerRoutingModule } from "./owner-routing.module";
import { OwnerComponent } from "./owner/owner.component";
import { RegisterComponent } from "./register/register.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [OwnerComponent, RegisterComponent],
  imports: [CommonModule, OwnerRoutingModule, SharedModule],
})
export class OwnerModule {}
