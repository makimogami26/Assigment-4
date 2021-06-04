import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = this.authService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set("access_token", token),
    });
    if (!token) {
      return next.handle(req);
    } else {
      return next.handle(authRequest);
    }
  }
}

