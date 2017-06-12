import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';

const loginRoutes : Routes = [
  { path: '', component: LoginComponent }
];

@NgModule ({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(loginRoutes)
  ]
})

export class LoginModule { }
