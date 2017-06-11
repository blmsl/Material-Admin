import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { JumbotronComponent } from "./jumbotron.component";

const jumbotronRoutes : Routes = [
    { path: '', component: JumbotronComponent }
];

@NgModule ({
    declarations: [
        JumbotronComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(jumbotronRoutes)
    ]
})

export class JumbotronModule {  }
