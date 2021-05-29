import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() loginUser!: EventEmitter<{ email: string; password: string }>;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginUser = new EventEmitter<{ email: string; password: string }>();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.loginForm.value;
    console.log(this.loginForm.value);
  }
}
