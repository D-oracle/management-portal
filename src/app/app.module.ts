import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbToastrModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbInputModule, NbPopoverModule, NbRadioModule, NbSelectModule, NbStepperModule, NbListModule, NbIconModule, NbMenuItem, NbMenuModule, NbActionsModule, NbUserModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginAuthGuard } from './auth/login-auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LoginComponent } from './auth/login/login.component';
import { Ng2TableModule, NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table';
import { IdCardComponent } from './id-card/id-card.component';
import { NgxPrintModule } from 'ngx-print';
import { AuthInterceptor } from './auth-interceptor';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import {MatTableModule} from '@angular/material/table';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxUploaderModule } from 'ngx-uploader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, IdCardComponent, ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbContextMenuModule,
    NbSelectModule,
    NbCardModule,
    NbIconModule,
    FormsModule,
    Ng2TableModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    MatTableModule,
    NgxPrintModule,
    NbDialogModule,
    NbListModule,
    NbUserModule,
    NbCheckboxModule,
    NbActionsModule,
    NbPopoverModule,
    NbRadioModule,
    NbDialogModule.forRoot(),
    NbStepperModule,
    NbInputModule,
    FileUploadModule,
    HttpClientModule,
    NbWindowModule.forRoot(),
    NbLayoutModule,
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AuthGuard, LoginAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
