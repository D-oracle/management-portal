import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServiceComponent } from './add-service/add-service.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManagementComponent } from './management.component';
import { ManagementRoutingModule } from './management-routing/management-routing.module';
import { NbButtonComponent, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbTableModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { ViewServiceComponent } from './view-service/view-service.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ManageAgentComponent } from './manage-agent/manage-agent.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [AddServiceComponent, ManageServiceComponent, AddStaffComponent, ManageStaffComponent, ManagementComponent, ViewStaffComponent, ViewServiceComponent, AddAgentComponent, ViewAgentComponent, ManageAgentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ManagementRoutingModule,
    NbInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbButtonModule,
  ]
})
export class ManagementModule { }
