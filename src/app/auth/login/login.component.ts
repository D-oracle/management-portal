import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { AuthService, AuthResponseData } from 'src/app/auth.service';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private toasterService: NbToastrService,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl(null, { validators: [Validators.required, Validators.email] }),
        password: new FormControl(null, { validators: [Validators.required] }),
      },
      {},
    );
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    let authObs: Observable<AuthResponseData>;

    authObs = this.authService.login(email, password);

    authObs.subscribe(
      (resData: any) => {
        if (resData.verifyOtp) {
          this.router.navigate(['/otp'], {
            relativeTo: this.route,
            queryParams: {
              phone: resData.phone,
              email: resData.email,
              type: 'login',
            },
          });
        } else {
          if (resData.role === 'admin' || 'management') {
            this.showToast('top-right', 'success', `Login Success`);
            this.router.navigate(['/admin/dashboard'], {
              relativeTo: this.route,
            });
          } else if (resData.role === 'staff' || 'elc') {
            this.showToast('top-right', 'success', `Login Success`);
            this.router.navigate(['/pages/dashboard'], {
              relativeTo: this.route,
            });
          }
        }
        this.loginForm.reset();
      },
      (errorMessage: any) => {
        this.showToast('top-right', 'danger', 'Invalid Email or Password');
      },
    );
  }

  showToast(position: any, status: any, message: any) {
    this.toasterService.show(status, message, {
      position,
      status,
    });
  }
}
