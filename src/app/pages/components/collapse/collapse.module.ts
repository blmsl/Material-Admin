import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CollapseComponent } from "./collapse.component";

const collapseRoutes : Routes = [
    { path: '', component: CollapseComponent }
]

@NgModule ({
    declarations: [
        CollapseComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        RouterModule.forChild(collapseRoutes)
    ]
})

export class CollapseComponentModule {  }
