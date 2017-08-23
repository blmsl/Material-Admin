import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PaginationComponent } from './pagination.component';

const paginationRoutes: Routes = [
  { path: '', component: PaginationComponent }
];

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(paginationRoutes)
  ]
})

export class PaginationsModule { }
