import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BreadcrumbComponent } from "./breadcrumb.component";

const breadcrumbRoutes : Routes = [
    { path: '', component: BreadcrumbComponent }
];

@NgModule ({
    declarations: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(breadcrumbRoutes)
    ]
})

export class BreadcrumbModule {  }
