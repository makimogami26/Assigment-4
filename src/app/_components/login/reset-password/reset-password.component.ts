import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/_services/auth.service";
import { UserService } from "src/app/_services/user.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  @Output() loginUser!: EventEmitter<{ new_password: string }>;
  getParamsUserId!: string;
  getParamsSuperKey!: string;
  resetPasswordForm: FormGroup = new FormGroup({
    new_password: new FormControl(null, [Validators.required])
  });
  constructor(private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.loginUser = new EventEmitter<{ new_password: string }>();
  }
  ngOnInit() {
    this.getParamsUserId = this.activeRoute.snapshot.params['user_id'];
    this.getParamsSuperKey = this.activeRoute.snapshot.params['superkey'];
    this.resetPasswordForm
  }
  onSubmit() {
    this.userService.resetPassword(this.getParamsUserId, this.getParamsSuperKey, this.resetPasswordForm.value).subscribe((response: any) => {
      if (response.success) {
        Swal.fire("Success", response.message, "success");
        this.router.navigate(["/login"]);
      }
    });
  }
}
