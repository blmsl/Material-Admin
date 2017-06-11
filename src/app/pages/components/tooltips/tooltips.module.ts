import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TooltipsComponent } from "./tooltips.component";

const tooltipsRoutes : Routes = [
    { path: '', component: TooltipsComponent }
]

@NgModule ({
    declarations: [
        TooltipsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        RouterModule.forChild(tooltipsRoutes)
    ]
})

export class TooltipsComponentModule {  }
