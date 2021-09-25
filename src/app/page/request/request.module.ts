import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveRequestComponent } from './active-request/active-request.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { RequestRoutingModule } from './request-routing/request-routing.module';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { CompletedRequestComponent } from './completed-request/completed-request.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AssignRequestComponent } from './assign-request/assign-request.component';


@NgModule({
  declarations: [ActiveRequestComponent, NewRequestComponent, CompletedRequestComponent, ViewRequestComponent, AssignRequestComponent],
  imports: [
    RequestRoutingModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    NbIconModule,
    NbEvaIconsModule,
    MatFormFieldModule,
    NbCardModule,
    Ng2SmartTableModule,
  ]
})
export class RequestModule { }
