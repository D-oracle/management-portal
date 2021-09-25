import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  roles: [];
  staffForm: FormGroup;
  locations: any;
  constructor(private fb: FormBuilder, private api: ServicesService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      email: [''],
      password: [''],
      role: [''],
      firstname: [''],
      lastname: [''],
      phone: ['']
    })
    this.getRoles()
    this.getLocations()
  }

  getRoles() {
    this.api.getRoles()
      .subscribe((data) => {
        this.roles = JSON.parse(JSON.stringify(data));
      })
  }

  getLocations() {
    this.api.getLocations()
      .subscribe((data) => {
        this.locations = data;
      })
  }

  createStaffAccount() {
    this.api.addStaff(this.staffForm.value).subscribe(() => {
      this.showToast('top-right', 'success', 'Staff Added Successfully');
      this.staffForm.reset()
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
