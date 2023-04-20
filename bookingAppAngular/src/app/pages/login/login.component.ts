import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: User = {
    email: '',
    password: '',
  };
  errorMsg = null;
  pageType: any;
  constructor(
    private global: GlobalService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.ActivatedRoute.data.subscribe((res) => {
      // console.log(res);
      this.pageType = res['type'];
      console.log(this.pageType);
      if (this.pageType == 'admin' || this.pageType == 'vendor')
        this.global.isNavbar = false;
    });
  }
  submit(data: NgForm) {
    console.log(data);
    if (this.pageType == 'user') {
      if (data.valid) {
        this.global.userLogin(this.form).subscribe(
          (res) => {
            // console.log(res.data);
            if (res.apiStatus) this.router.navigateByUrl('/reservation');
            localStorage.setItem('tokens', res.data.token);
            this.global.isLogged = true;
          },
          (e) => {
            console.log(e.error.message);
            this.errorMsg = e.error.message;
          }
        );
      }
    } else if (this.pageType == 'admin') {
      if (data.valid) {
        this.global.adminLogin(this.form).subscribe(
          (res) => {
            // console.log(res.data);
            if (res.apiStatus) this.router.navigateByUrl('/dashboard/home');
            localStorage.setItem('tokens', res.data.token);
            this.global.isLogged = true;
          },
          (e) => {
            console.log(e.error.message);
            this.errorMsg = e.error.message;
          }
        );
      }
    } else if (this.pageType == 'vendor') {
      if (data.valid) {
        this.global.vendorLogin(this.form).subscribe(
          (res) => {
            // console.log(res.data);
            if (res.apiStatus)
              this.router.navigateByUrl('/vendorDashboard/home');
            localStorage.setItem('tokens', res.data.token);
            this.global.isLogged = true;
          },
          (e) => {
            console.log(e.error.message);
            this.errorMsg = e.error.message;
          }
        );
      }
    }
  }
}
