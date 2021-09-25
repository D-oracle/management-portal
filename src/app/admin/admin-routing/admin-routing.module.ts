import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { LoginAuthGuard } from 'src/app/auth/login-auth.guard';
import { LeadsComponent } from 'src/app/page/leads/leads.component';
import { StaffAuthGuard } from 'src/app/auth/staff-auth.guard';
import { RequestComponent } from 'src/app/page/request/request.component';
import { ProfileComponent } from 'src/app/page/profile/profile.component';
import { ApplicationComponent } from '../application/application.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminAuthGuard } from 'src/app/auth/admin-auth.guard';
import { ConfigurationsComponent } from '../configurations/configurations.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ServiceComponent } from '../service/service.component';
import { EventComponent } from '../event/event.component';
import { AccountsComponent } from '../accounts/accounts.component';
import { AdminComponent } from '../admin.component';
import { ViewApplicantsComponent } from '../application/view-applicants/view-applicants.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { 
        path: 'applicants', 
        component: ApplicationComponent,
      },

      {
        path: 'applicant/:id', component: ViewApplicantsComponent, data: { animation: 'applicant'}
      },
    
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
        // canActivate: [LoginAuthGuard, AdminAuthGuard]
      },
    
      {
        path: 'event',
        component: EventComponent,
        // canActivate: [LoginAuthGuard, AdminAuthGuard]
      },
    
      {
        path: 'service',
        component: ServiceComponent,
        // canActivate: [LoginAuthGuard, AdminAuthGuard]
      },

      {
        path: 'management',
        loadChildren: () => import('../management/management.module').then((m) => m.ManagementModule),
        // canActivate: [AuthGuard, AdminAuthGuard],
      },
    
      {
        path: 'configurations',
        loadChildren: () => import('../configurations/configurations.module').then((m) => m.ConfigurationsModule),
        // canActivate: [AuthGuard, AdminAuthGuard],
      },
    
      {
        path: 'account',
        component: AccountsComponent,
        // canActivate: [LoginAuthGuard, AdminAuthGuard]
      },
    
      { path: '**', redirectTo: './dashboard' },      
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
