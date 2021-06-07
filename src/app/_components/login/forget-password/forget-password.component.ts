import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/_services/auth.service";
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
  constructor(private authService: AuthService) {
    this.inputEmail = new EventEmitter<{ email: string }>();
  }
  ngOnInit() {
    this.url = location.origin + "/login/reset-password";
    this.forgetPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      originUrl: this.url
    });
  }
  onSubmit() {
    this.authService.forgetPassword(this.forgetPasswordForm.value).subscribe((response: any) => {
      if (response.success) {
        Swal.fire("Check your email!", response.message, "success");
      }
    })
  }
}
