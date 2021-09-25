import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  rolesForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ServicesService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.rolesForm = this.fb.group({
      name: [''],
      desc: ['']
    })
  }

  createRole() {
    this.api.addRole(this.rolesForm.value).subscribe((res: any) => {
      this.showToast('top-right', 'success', 'Role Created Successfully');
      this.rolesForm.reset()
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
