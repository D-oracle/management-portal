import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {

  constructor(private api: ServicesService, private toastrService: NbToastrService, private location: Location, private route: ActivatedRoute) { }

  role: any

  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getRole();
  }

  getRole() {
    this.api.getRole(this.id).subscribe(
      (role) => {
        this.role = role;
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.api.updateRole(this.id, this.role)
      .subscribe(() => this.goBack());
  }

}
