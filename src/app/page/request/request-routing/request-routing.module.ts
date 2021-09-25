import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from '../request.component';
import { RouterModule, Routes } from '@angular/router';
import { ActiveRequestComponent } from '../active-request/active-request.component';
import { NewRequestComponent } from '../new-request/new-request.component';
import { CompletedRequestComponent } from '../completed-request/completed-request.component';
import { ViewRequestComponent } from '../view-request/view-request.component';

const routes: Routes = [
  {
    path: '',
    component: RequestComponent,
    children: [
      { 
        path: 'active', 
        component: ActiveRequestComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },
    
      { 
        path: 'new', 
        component: NewRequestComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },

      { 
        path: 'completed', 
        component: CompletedRequestComponent,
        // canActivate: [LoginAuthGuard, StaffAuthGuard]
      },

      {
        path: 'view-request/:id',
        component: ViewRequestComponent
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
export class RequestRoutingModule { }
