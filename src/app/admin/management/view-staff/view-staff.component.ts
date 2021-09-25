import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

  constructor(private api: ServicesService, private toastrService: NbToastrService, private location: Location, private route: ActivatedRoute) { }

  staff: any

  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getStaff();
  }

  getStaff() {
    this.api.getStaff(this.id).subscribe(
      (data) => {
        this.staff = data;
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.api.updateAgent(this.id, this.staff)
      .subscribe(() => this.goBack());
  }


}
