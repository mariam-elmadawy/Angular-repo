import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  constructor(private http: HttpClient) {}
  getAllHotels(): Observable<any> {
    return this.http.get('http://localhost:3000/api/hotel/showAll');
  }
  getSingleHotel(id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/api/hotel/show/${id}`);
  }
}
