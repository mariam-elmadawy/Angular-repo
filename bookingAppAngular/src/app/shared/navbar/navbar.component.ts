import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  classShow = '';
  constructor(public global: GlobalService) {
    // console.log(global.isLogged);
  }
  logout() {
    localStorage.removeItem('tokens');
    this.global.isLogged = false;
  }
  handleShow() {
    let element = document.getElementById(
      'navbarSupportedContent'
    ) as HTMLElement;
    element.classList.remove('show');
  }
}
