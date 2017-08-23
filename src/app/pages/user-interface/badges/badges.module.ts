import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BadgesComponent } from './badges.component';

const badgesRoutes: Routes = [
  { path: '', component: BadgesComponent }
];

@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(badgesRoutes)
  ]
})

export class BadgesModule { }
