import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((route) => route.AuthModule),
  },
  {
    path: "owner",
    loadChildren: () =>
      import("./owner/owner.module").then((route) => route.OwnerModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user/user.module").then((route) => route.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
