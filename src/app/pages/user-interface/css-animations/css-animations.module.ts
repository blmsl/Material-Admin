import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CssAnimationsComponent } from "./css-animations.component";

const cssAnimationsRoutes : Routes = [
    { path: '', component: CssAnimationsComponent }
]

@NgModule ({
    declarations: [
        CssAnimationsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(cssAnimationsRoutes)
    ]
})

export class CssAnimationsModule {  }
