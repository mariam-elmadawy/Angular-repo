import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorComponent } from './pages/error/error.component';
import { SingleRoomComponent } from './pages/single-room/single-room.component';
import { SingleHotelComponent } from './pages/single-hotel/single-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HotelsComponent,
    RoomsComponent,
    ReservationComponent,
    ProfileComponent,
    ErrorComponent,
    SingleRoomComponent,
    SingleHotelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
