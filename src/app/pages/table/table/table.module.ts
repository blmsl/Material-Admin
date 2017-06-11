import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table.component';

const tableRoutes: Routes = [
    { path: '', component: TableComponent }
];

@NgModule ({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(tableRoutes)
    ]
})

export class TableModule {  }
