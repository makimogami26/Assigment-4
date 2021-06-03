import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  signUpForm: FormGroup;
  constructor( public formBuilder : FormBuilder,
    public authService: AuthService,
    public router: Router) {  
    }

  ngOnInit() {this.signUpForm = this.formBuilder.group({
    suplier_name: [null, [Validators.required, Validators.email]],
    contact: [null, [Validators.required]],
    address: ['']
  });
}
onSubmit() {
  this.authService.signupSupplier(this.signUpForm.value);
}
}

  


