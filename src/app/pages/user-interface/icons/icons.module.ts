import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IconsComponent } from "./icons.component";

const iconsRoutes : Routes = [
    { path: '', component: IconsComponent }
];

@NgModule ({
    declarations: [
        IconsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(iconsRoutes)
    ]
})

export class IconsModule {  }
