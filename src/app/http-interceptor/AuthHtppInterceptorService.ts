import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../spinner/spinner.service';
@Injectable()
export class AuthHtppInterceptorService implements HttpInterceptor {
    constructor() { }


    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!req.headers.has('meta') && localStorage.getItem('token')) {
          req = req.clone({
            setHeaders: {
              Authorization: "Bearer "+ localStorage.getItem('token'),
              'Access-Control-Allow-Origin':'http://localhost:4200'
            }
          })
        }
        return next.handle(req);
      }
}

