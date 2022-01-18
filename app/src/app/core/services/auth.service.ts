import { IuserSignIn } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public endpoint: string = "http://localhost:5000/api"
  public headers = new HttpHeaders().set("Content-Type", "application/json");
  public currentUser: Object = {}; //Almacenamos respuesta del signIn => Token + _id + expires

  constructor(private http: HttpClient, public router: Router) { }

  public signup(user: Iuser) {
    const api = `${this.endpoint}/signup`;
    return this.http.post(api, user).pipe(
      catchError(this.handleError)
    )
  };


  public signIn(userSignIn: IuserSignIn) {
    const api = `${this.endpoint}/signin`
    return this.http.post<any>(api, userSignIn).subscribe((res) => {
      localStorage.setItem("access_token", res.token);
      this.currentUser = res;
    })
  }


  public getToken() {
    return localStorage.getItem("access_token");
  }


  public doLogout() {
    let removeToken = localStorage.removeItem("access_token");
    if (removeToken == null) {
      this.router.navigate(["home"]);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token")
    return (authToken !== null) ? true : false;
  }


    // Error 
    private handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    };
  
}
