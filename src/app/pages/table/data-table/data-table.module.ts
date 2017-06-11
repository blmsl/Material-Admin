import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { DataTableComponent } from './data-table.component';

const DataTableRoutes: Routes = [
    { path: '', component: DataTableComponent }
];

@NgModule ({
    declarations: [
        DataTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
        Ng2TableModule,
        RouterModule.forChild(DataTableRoutes)
    ]
})

export class DataTableModule { }
