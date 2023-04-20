import { Component } from '@angular/core';
import { GlobalService } from './services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'booking';
  constructor(public global: GlobalService) {
    let tokens = localStorage.getItem('tokens');
    if (tokens) {
      global.isLogged = true;
    }
  }
}
