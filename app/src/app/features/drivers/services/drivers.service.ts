import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  endpoint: string = 'http://localhost:5000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  getDrivers(): Observable<any> {
    let api = `${this.endpoint}/drivers/`;
    return this.http.get(api, { headers: this.headers });
  }

  public getDriverDetail(url: string) {
    return this.http.get(url);
  }


  getTeams() {
    let api = `${this.endpoint}/teams`;
    return this.http.get(api, { headers: this.headers });
  }


  public getTeamsDetail(url: string) {
    return this.http.get(url);
  }


}