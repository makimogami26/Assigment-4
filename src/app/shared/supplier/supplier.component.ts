import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { Suplier } from "src/app/model/Suplier";
import { SupplierService } from "src/app/service/supplier.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-supplier",
  templateUrl: "./supplier.component.html",
  styleUrls: ["./supplier.component.css"],
})
export class SupplierComponent implements OnInit {
  signUpForm: FormGroup;
  listSupplier: Suplier[];
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public supplierService: SupplierService
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      suplier_name: [null, [Validators.required, Validators.email]],
      contact: [null, [Validators.required]],
      address: [""],
    });

    this.supplierService.getSupplier().subscribe((Supplier) => {
      this.listSupplier = Supplier;
    });
  }
}