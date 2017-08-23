import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { PaginationComponent } from './pagination.component';

const paginationRoutes: Routes = [
  { path: '', component: PaginationComponent }
]

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forChild(paginationRoutes)
  ]
})

export class PaginationComponentModule { }
