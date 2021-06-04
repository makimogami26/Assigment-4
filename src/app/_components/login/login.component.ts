import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/_services/auth.service";
import { UserService } from "src/app/_services/user.service";
import Swal from "sweetalert2";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() loginUser!: EventEmitter<{ email: string; password: string }>;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });
  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    this.loginUser = new EventEmitter<{ email: string; password: string }>();
  }
  ngOnInit() {
    this.loginForm
  }
  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe((response: any) => {
      localStorage.setItem("access_token", response.data.logToken);
      if (response.success) {
        this.auth.isLoggedIn = true;
        this.auth.userRole = response.data.role;
        this.auth.loginStatusListener.next(true);
        this.router.navigate(["/" + response.data.role]);
        Swal.fire("Success", "Login success..", "success");
      }
    });
  }

}
