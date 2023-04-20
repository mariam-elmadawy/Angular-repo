import { Component } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent {
  hotels: any[] = [];
  constructor(private hotel: HotelsService) {
    this.hotel.getAllHotels().subscribe((res) => {
      this.hotels = res.data;
      console.log(res);
    });
  }
}
