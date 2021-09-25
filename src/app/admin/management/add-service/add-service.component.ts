import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  locations: any;
  serviceForm: FormGroup
  constructor(private fb: FormBuilder, private api: ServicesService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: [''],
      category: [''],
      location: [''],
      cost: [],
      propName: [''],
      propValue: [''],
      subPropName: [''],
      subPropValue: [''],
    })
    this.getLocations()
  };

  getLocations() {
    this.api.getLocations()
    .subscribe((data) => {
      this.locations = data;
    })
  }

  createService() {
    this.api.addService(this.serviceForm.value).subscribe(() => {
      this.showToast('top-right', 'success', 'Service Added Successfully');
      this.serviceForm.reset()
    },
    (err: any) => {
      this.showToast('top-right', 'danger', 'Failed,'+ err.statusText)
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

}
