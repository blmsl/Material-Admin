import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../../shared/shared.module";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FormValidationComponent } from "./form-validation.component";

const formValidationRoutes : Routes = [
    { path: '', component: FormValidationComponent }
];

@NgModule ({
    declarations: [
        FormValidationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(formValidationRoutes)
    ]
})

export class FormValidationModule {  }
