import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from "../../../shared/shared.module";

import { FlotComponent } from "./flot.component";

const flotRoutes : Routes = [
    { path: '', component: FlotComponent }
];

@NgModule ({
    declarations: [
        FlotComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(flotRoutes)
    ]
})

export class FlotModule {  }
