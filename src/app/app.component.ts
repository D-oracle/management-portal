import { Router, ActivatedRoute } from '@angular/router';
import { UserData, AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.analytics.trackPageViews();
    // this.seoService.trackCanonicalChanges();
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }
    // this.authService.autoLogin().subscribe(
    //   (resData) => {
    //     this.authService.loadUser(userData);
    //   },
    //   (errorMessage) => {
    //     this.router.navigate(['/login'], { relativeTo: this.route });
    //   },
    // );
  }
}
