import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToast, NbToastrService } from '@nebular/theme';
import { AuthService } from 'src/app/auth.service';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  services: any;
  staffs: any;
  locationForm: FormGroup
  constructor(private api: ServicesService, private auth: AuthService, private fb: FormBuilder, private toastrService: NbToastrService) { 

  }

  ngOnInit(): void {
    this.getStaffs()
    this.locationForm = this.fb.group({
      elc: [''],
      state: [''],
      city: [''],
    })
  }

  getStaffs() {
    this.api.getAllStaff()
    .subscribe((data) => {
      this.staffs = data;
    })
  }

  createLocation() {
    this.api.addLocation(this.locationForm.value).subscribe(() => {
      this.showToast('top-right', 'success', 'Location Added Successfully');
      this.locationForm.reset()
    },
    (err: any) => {
      this.showToast('top-right', 'danger', err.statusText)
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

}
