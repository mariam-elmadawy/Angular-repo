import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  isLogged = false;
  isNavbar = true;
  isDashNav = false;
  url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}
  userLogin(data: any): Observable<any> {
    return this.http.post(`${this.url}user/login`, data);
  }
  adminLogin(data: any): Observable<any> {
    return this.http.post(`${this.url}admin/login`, data);
  }
  vendorLogin(data: any): Observable<any> {
    return this.http.post(`${this.url}vendor/login`, data);
  }
  userRegister(data: any): Observable<any> {
    return this.http.post(`${this.url}user/register`, data);
  }
}
