import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  {
    path: '/register',
    loadChildren: '/register/register.module#RegisterPageModule'
  },
  {
    path: '',
    component: AuthPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage, RegisterPage]
})
export class AuthPageModule { }
