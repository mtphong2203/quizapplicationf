import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AUTH_SERVICE } from '../../constants/injection.constant';
import { AuthService } from '../services/auth/auth.service';
import { authAnonymous } from '../../guards/auth.anonymous';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authAnonymous]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
