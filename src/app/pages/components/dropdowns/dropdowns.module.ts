import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DropdownsComponent } from "./dropdowns.component";

const dropdownsRoutes : Routes = [
    { path: '', component: DropdownsComponent }
]

@NgModule ({
    declarations: [
        DropdownsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(dropdownsRoutes)
    ]
})

export class DropdownComponentModule {  }
