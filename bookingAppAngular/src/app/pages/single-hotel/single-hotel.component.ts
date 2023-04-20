import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from 'src/app/services/hotels/hotels.service';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.css'],
})
export class SingleHotelComponent {
  singleHotel: any;
  id: any;
  hotels: any[] = [];
  constructor(
    private hotel: HotelsService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.hotel.getAllHotels().subscribe((res) => {
      this.hotels = res.data;
    });
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      let id = params.get('id');
      hotel.getSingleHotel(id).subscribe((res) => {
        this.singleHotel = res.data;
      });
    });
  }
  test() {
    console.log('test');
  }
}
