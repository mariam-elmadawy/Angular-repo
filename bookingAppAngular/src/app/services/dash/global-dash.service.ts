import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalDashService {
  isNavbar = false;
  isDashNav = true;
  url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}
  adminShow(): Observable<any> {
    return this.http.get(`${this.url}admin`);
  }
  DelAllAdmins(): Observable<any> {
    return this.http.delete(`${this.url}admin`);
  }
  delOne(id: any): Observable<any> {
    return this.http.delete(`${this.url}admin/${id}`);
  }
  adminEdit(id: any): Observable<any> {
    return this.http.get(`${this.url}admin/${id}`);
  }
  addAdmin(data: any): Observable<any> {
    return this.http.post(`${this.url}admin/register`, data);
  }
}
