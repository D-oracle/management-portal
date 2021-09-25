import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ApplicationComponent } from './application/application.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ServiceComponent } from './service/service.component';
import { EventComponent } from './event/event.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbCardModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbListModule, NbMenuModule, NbSelectComponent, NbSelectModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, NgSelectOption, ReactiveFormsModule } from '@angular/forms';
import { ViewApplicantsComponent } from './application/view-applicants/view-applicants.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [AdminComponent, ApplicationComponent, ConfigurationsComponent, AccountsComponent, ServiceComponent, EventComponent, AdminDashboardComponent, ViewApplicantsComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    AdminRoutingModule,
    NbLayoutModule,
    MatPaginatorModule,
    NbMenuModule,
    NbActionsModule,
    NbSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    NbContextMenuModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSidebarModule,
  ]
})
export class AdminModule { }
