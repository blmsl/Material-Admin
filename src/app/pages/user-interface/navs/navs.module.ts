import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavsComponent } from "./navs.component";

const navsRoutes : Routes = [
    { path: '', component: NavsComponent }
];

@NgModule ({
    declarations: [
        NavsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(navsRoutes)
    ]
})

export class NavsModule {  }
