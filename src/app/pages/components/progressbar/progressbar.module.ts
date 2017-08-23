import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { ProgressbarComponent } from './progressbar.component';

const progressbarRoutes: Routes = [
  { path: '', component: ProgressbarComponent }
]

@NgModule({
  declarations: [
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forChild(progressbarRoutes)
  ]
})

export class ProgressbarComponentModule { }
