import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './auth/admin-auth.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
// import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginAuthGuard } from './auth/login-auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard],
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [],
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [],
  },

  {
    path: 'pages',
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule),
    canActivate: [],
  },

  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
