import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( public _auth: AuthService ) { }

  intercept(req, next){
    // let authService = (this.injector.get(AuthService))
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth .getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
