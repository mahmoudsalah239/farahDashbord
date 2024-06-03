import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login',
      urls: [{ title: 'Login', url: '/login' }, { title: 'Login' }],
    },
    component: LoginComponent,
  },
  {
    path: 'login',
    data: {
      title: 'Login',
      urls: [{ title: 'Login', url: '/login' }, { title: 'Login' }],
    },
    component: LoginComponent,
  },
  {
    path: 'register',
    data: {
      title: 'register',
      urls: [{ title: 'register', url: '/register' }, { title: 'register' }],
    },
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
