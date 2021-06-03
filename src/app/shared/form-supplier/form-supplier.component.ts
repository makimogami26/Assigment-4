import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-form-supplier',
  templateUrl: './form-supplier.component.html',
  styleUrls: ['./form-supplier.component.css']
})
export class FormSupplierComponent implements OnInit {
  @Output() createSuplier!: EventEmitter<{ suplier_name : string; contact: string; address: string; }>;
  createSuplierForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {this.createSuplier = new EventEmitter<{ suplier_name : string; contact: string; address: string; }>()}

  ngOnInit() {
    this.createSuplierForm = this.formBuilder.group({
      suplier_name: [null, [Validators.required]],
      contact: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }
  onSubmit() {
    console.log("ok")
    this.authService.signupSupplier(this.createSuplierForm.value);
  }
}