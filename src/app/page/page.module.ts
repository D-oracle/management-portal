import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { ProfileComponent } from './profile/profile.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { PageRoutingModule } from './page-routing/page-routing.module';
import { PageComponent } from './page.component';
import { ClientComponent } from './client/client.component';
import { Ng2TableModule, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { AgentsComponent } from './agents/agents.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxUploaderModule } from 'ngx-uploader';



@NgModule({
  declarations: [RequestComponent, PageComponent, DashboardComponent, LeadsComponent, ProfileComponent, ClientComponent, AgentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageRoutingModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule,
    NbActionsModule,
    FileUploadModule,
    NbUserModule,
    NbInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    NbSelectModule,
    NbButtonModule,
    NbContextMenuModule,
    NbCardModule,
    NbEvaIconsModule,
    NgxUploaderModule,
    Ng2TableModule,
    NbDialogModule,
    NbSidebarModule,
    NbIconModule,
    Ng2SmartTableModule,
  ],
  exports: [NgxUploaderModule],
  providers: []
})
export class PageModule { }
