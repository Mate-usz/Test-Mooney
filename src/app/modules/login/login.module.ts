import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationSuccessContainerComponent } from './pages/registration-success-container/registration-success-container.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationSuccessComponent } from './components/registration-success/registration-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    LoginContainerComponent,
    RegistrationSuccessComponent,
    RegistrationSuccessContainerComponent,
    LogFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
