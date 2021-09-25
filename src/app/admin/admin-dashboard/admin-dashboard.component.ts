import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  newApplications: Array<Object> = [];
  applications: Array<Object> = [];
  constructor(private api: ServicesService) { }

  ngOnInit(): void {
    this.getApplicants()
    this.newApplicants();
  }

  getApplicants() {
    this.api.getApplications()
    .subscribe((data: any) => {
      this.applications = data;
    })
  }

  newApplicants() {
    this.newApplications = this.applications.filter((h: any) => h.status == 'unreviewed');
  }
}
