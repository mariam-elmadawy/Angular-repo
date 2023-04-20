import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  rooms: any;
  reserv: string = '';

  constructor() {
    this.reserv = localStorage.getItem('room') as string;
    // console.log(JSON.parse(this.reserv));
    this.rooms = JSON.parse(this.reserv);
  }
}
