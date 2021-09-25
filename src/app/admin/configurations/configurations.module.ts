import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoleComponent } from './add-role/add-role.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { ManageLocationComponent } from './manage-location/manage-location.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { ConfigurationsRoutingModule } from './configurations-routing/configurations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ViewLocationComponent } from './view-location/view-location.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ManageRoleComponent } from './add-role/manage-role/manage-role.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AddRoleComponent, AssignRoleComponent, AddLocationComponent, ManageLocationComponent, ViewLocationComponent, ViewRoleComponent, ManageRoleComponent],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    ReactiveFormsModule,
    NbCardModule,
    NbSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbEvaIconsModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbSelectModule
  ]
})
export class ConfigurationsModule { }
