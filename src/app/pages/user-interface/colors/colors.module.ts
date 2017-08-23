import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ColorsComponent } from './colors.component';

const colorsRoutes: Routes = [
  { path: '', component: ColorsComponent }
];

@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(colorsRoutes)
  ]
})

export class ColorsModule { }
