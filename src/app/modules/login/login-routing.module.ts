import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationSuccessContainerComponent } from './pages/registration-success-container/registration-success-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: '', component: LoginContainerComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration-success', component: RegistrationSuccessContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
