import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { DataTableComponent } from './data-table.component';

const DataTableRoutes: Routes = [
  { path: '', component: DataTableComponent }
];

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(DataTableRoutes),
    Ng2TableModule,
    PaginationModule.forRoot()
  ]
})

export class DataTableModule { }
