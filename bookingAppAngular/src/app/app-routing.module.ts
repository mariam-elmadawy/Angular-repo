import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { SingleHotelComponent } from './pages/single-hotel/single-hotel.component';
import { SingleRoomComponent } from './pages/single-room/single-room.component';
import { LoginComponent } from './pages/login/login.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { IndexDashComponent } from './dashboard/components/index-dash/index-dash.component';
import { EditDashComponent } from './dashboard/components/edit-dash/edit-dash.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: IndexComponent },
      {
        path: 'dashboard',
        children: [
          { path: '', component: LoginComponent, data: { type: 'admin' } },
          { path: 'home', component: IndexDashComponent },
          { path: 'edit', component: EditDashComponent },
          { path: 'register', component: RegisterComponent },
        ],
      },
      {
        path: 'vendorDashboard',
        children: [
          { path: '', component: LoginComponent, data: { type: 'vendor' } },
          { path: 'home', component: IndexDashComponent },
        ],
      },
    ],
  },

  {
    path: 'hotels',
    children: [
      { path: '', component: HotelsComponent },
      { path: ':id', component: SingleHotelComponent },
      { path: 'hotelRooms/:id', component: SingleRoomComponent },
    ],
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'login', component: LoginComponent, data: { type: 'user' } },
  { path: 'rooms', component: RoomsComponent },
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
