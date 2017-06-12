import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../../shared/shared.module';

import { LogoutComponent } from './logout.component';

const logoutRoutes : Routes = [
  { path: '', component: LogoutComponent }
];

@NgModule ({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(logoutRoutes)
  ]
})

export class LogoutModule { }
