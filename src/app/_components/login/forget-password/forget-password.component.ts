import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/_services/auth.service";
import { UserService } from "src/app/_services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  @Output() inputEmail!: EventEmitter<{ email: string }>;
  url: any;
  forgetPasswordForm!: FormGroup;
  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    this.inputEmail = new EventEmitter<{ email: string }>();
  }
  ngOnInit() {
    this.url = location.origin + "/reset-password";
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      originUrl: this.url
    });
  }
  onSubmit() {
    this.userService.forgetPassword(this.forgetPasswordForm.value).subscribe((response: any) => {
      if (response.success) {
        Swal.fire("Check your email!", response.message, "success");
      }
    })
  }
}
