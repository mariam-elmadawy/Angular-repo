import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private http: HttpClient) {}
  getRoom(): Observable<any> {
    return this.http.get('http://localhost:3000/api/room/showAll');
  }
  getSingleRoom(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/api/room/show/${id}`);
  }
}
