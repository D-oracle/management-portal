import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from 'src/app/auth/login-auth.guard';
import { StaffAuthGuard } from 'src/app/auth/staff-auth.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LeadsComponent } from '../leads/leads.component';
import { ProfileComponent } from '../profile/profile.component';
import { RequestComponent } from '../request/request.component';
import { PageComponent } from '../page.component';
import { ClientComponent } from '../client/client.component';
import { AgentsComponent } from '../agents/agents.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { 
        path: 'dashboard', 
        component: DashboardComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },
    
      { 
        path: 'leads', 
        component: LeadsComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },

      { 
        path: 'clients', 
        component: ClientComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },

      { 
        path: 'agents', 
        component: AgentsComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },
    
      { 
        path: 'profile', 
        component: ProfileComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },

      {
        path: 'requests',
        loadChildren: () => import('../request/request.module').then((m) => m.RequestModule),
        canActivate: [],
      },

      {
        path: '**',
        redirectTo: '/pages/dashboard',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full'
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
export class PageRoutingModule { }
