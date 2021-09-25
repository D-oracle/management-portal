import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddLocationComponent } from '../add-location/add-location.component';
import { AddRoleComponent } from '../add-role/add-role.component';
import { AssignRoleComponent } from '../assign-role/assign-role.component';
import { ConfigurationsComponent } from '../configurations.component';
import { ManageLocationComponent } from '../manage-location/manage-location.component';
import { ViewLocationComponent } from '../view-location/view-location.component';
import { ManageRoleComponent } from '../add-role/manage-role/manage-role.component';
import { ViewRoleComponent } from '../view-role/view-role.component';

let routes: Routes = [
  {
    path: '',
    component: ConfigurationsComponent,
    children: [
      { path: 'create-role', component: AddRoleComponent },
      { path: 'manage-role', component: ManageRoleComponent },
      {
        path: 'view-role/:id', 
        component: ViewRoleComponent
      },
      {
        path: 'add-location',
        component: AddLocationComponent,
      },
      {
        path: 'view-location/:id',
        component: ViewLocationComponent,
      },
      {
        path: 'manage-location',
        component: ManageLocationComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ConfigurationsRoutingModule { }
