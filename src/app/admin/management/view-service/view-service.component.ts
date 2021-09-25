import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Location } from "@angular/common";
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  constructor(private api: ServicesService, private toastrService: NbToastrService, private location: Location, private route: ActivatedRoute) { }

  service: any

  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getService();
  }

  getService() {
    this.api.getService(this.id).subscribe(
      (data) => {
        this.service = data;
      }
    )
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.api.updateService(this.id, this.service).subscribe(() => {
      this.showToast('top-right', 'success', 'Service Updated Successfully');
      this.goBack()
    });
  }

}
