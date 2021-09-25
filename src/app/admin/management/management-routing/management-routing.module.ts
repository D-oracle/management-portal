import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from '../management.component';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { ManageStaffComponent } from '../manage-staff/manage-staff.component';
import { ManageServiceComponent } from '../manage-service/manage-service.component';
import { AddServiceComponent } from '../add-service/add-service.component';
import { AddAgentComponent } from '../add-agent/add-agent.component';
import { ManageAgentComponent } from '../manage-agent/manage-agent.component';
import { ViewServiceComponent } from '../view-service/view-service.component';
import { ViewStaffComponent } from '../view-staff/view-staff.component';
import { ViewAgentComponent } from '../view-agent/view-agent.component';

let routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      { path: 'add-staff', component: AddStaffComponent },
      {
        path: 'manage-staff', 
        component: ManageStaffComponent
      },
      { path: 'add-agent', component: AddAgentComponent },
      { path: 'manage-agent', component: ManageAgentComponent },
      {
        path: 'view-agent/:id',
        component: ViewAgentComponent,
      },
      {
        path: 'add-service',
        component: AddServiceComponent,
      },
      {
        path: 'manage-service',
        component: ManageServiceComponent
      },
      {
        path: 'view-service/:id',
        component: ViewServiceComponent
      },
      {
        path: 'view-staff/:id',
        component: ViewStaffComponent
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
    RouterModule
  ]
})
export class ManagementRoutingModule { }
