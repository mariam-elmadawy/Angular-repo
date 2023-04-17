import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { CardComponent } from './components/card/card.component';
import { SingleRoomComponent } from './pages/single-room/single-room.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hotels',
    component: HotelsComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'rooms',
    children: [
      { path: '', component: RoomsComponent },
      { path: ':id', component: SingleRoomComponent },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
