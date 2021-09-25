import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.css']
})
export class IdCardComponent implements OnInit {

  fullname: string = '';
  userRole: string = '';
  image_url: string;
  phone: string;
  email: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile() {
    let profile = this.auth.getUser();
    if (profile) {
      this.fullname = profile.firstname + ' ' + profile.lastname;
      this.phone = profile.phone;
      this.email = profile.email;
      if(profile.role == 'elc') {
        this.userRole = 'Location Co-ordinator'
      } else if(profile.role == 'admin') {
        this.userRole = 'Director'
      } else if(profile.role == 'management') {
        this.userRole = 'Mangement'
      } 
      else this.userRole = profile.role
    }
  }
}
