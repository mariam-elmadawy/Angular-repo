import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.css'],
})
export class SingleRoomComponent {
  singleRoom: any;
  id: any;
  rooms: any[] = [];
  constructor(
    private room: RoomsService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.room.getRoom().subscribe((res) => {
      this.rooms = res.data;
    });
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      let id = params.get('id');
      room.getSingleRoom(id).subscribe((res) => {
        this.singleRoom = res.data;
      });
    });
  }
}
