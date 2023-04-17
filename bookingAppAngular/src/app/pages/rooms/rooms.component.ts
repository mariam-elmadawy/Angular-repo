import { Component } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  rooms: any[] = [];
  constructor(private room: RoomsService) {
    this.room.getRoom().subscribe((res) => {
      console.log(res);
      this.rooms = res.data;
    });
  }
}
