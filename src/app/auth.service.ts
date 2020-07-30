import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _registerUrl = "http://localhost:3100/signup";
  public _loginUrl = "http://localhost:3100/login";
  public _logoutUrl = "http://localhost:3100/logout";

  constructor(private http: HttpClient, public router: Router) {  }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(user){
    return localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
