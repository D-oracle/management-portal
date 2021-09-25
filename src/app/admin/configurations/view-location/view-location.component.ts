import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Location } from "@angular/common";
import { ServicesService } from 'src/app/service.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {

  location: any;
  id: any
  staffs: any

  constructor(private api: ServicesService, private auth: AuthService, private toastrService: NbToastrService, private loca: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getLocation();
  }

  getLocation() {
    this.api.getLocation(this.id).subscribe(
      (data) => {
        this.location = data;
      }
    )
  }

  getStaffs() {
    this.auth.findStaffs().subscribe(
      (data) => {
        this.staffs = data;
      }
    )
  }

  goBack(): void {
    this.loca.back();
  }

  save() {
    this.api.updateLocation(this.id, this.location)
    .subscribe(() => this.goBack());
  }

}
