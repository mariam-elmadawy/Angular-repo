import { Component } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.css'],
})
export class SingleRoomComponent {
  rooms: any[] = [];
  id: any;
  constructor(
    private room: RoomsService,
    private _activatedRoute: ActivatedRoute
  ) {
    // this.room.getSingleRoom('id').subscribe((res) => {
    //   this.rooms = res.data;
    // });
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      let id = params.get('id');
      this.room.getHotelRooms(id).subscribe((res) => {
        this.rooms = res.data;
      });
    });
  }
  addRoom(data: any) {
    // console.log(data);
    localStorage.setItem('room', JSON.stringify(data));
  }
}
