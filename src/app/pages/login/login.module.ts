import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes),
    BsDropdownModule.forRoot(),
    SharedModule
  ]
})

export class LoginModule { }
