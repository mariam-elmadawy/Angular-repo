import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDashService } from 'src/app/services/dash/global-dash.service';

@Component({
  selector: 'app-index-dash',
  templateUrl: './index-dash.component.html',
  styleUrls: ['./index-dash.component.css'],
})
export class IndexDashComponent {
  adminData: any[] = [];
  id: any;
  //show all on relaod
  constructor(private admin: GlobalDashService, private router: Router) {
    this.admin.adminShow().subscribe((res) => {
      this.adminData = res.data;
    });
  }
  //del all admins
  deleteAdmins(data: any) {
    this.admin.DelAllAdmins().subscribe((res) => {
      this.adminData = res.data;
    });
  }
  delAdmin(id: any) {
    this.admin.delOne(id).subscribe((res) => {
      this.admin = res.data;
    });
  }
}
