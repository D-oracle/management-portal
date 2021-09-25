import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbInputModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { AuthService } from '../auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbInputModule,
    NbSidebarModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
