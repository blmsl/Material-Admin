import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "../../../shared/shared.module";
import { Autosize } from 'angular2-autosize';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FormElementsComponent } from './form-elements.component';

const formElementsRoutes : Routes = [
    { path: '', component: FormElementsComponent }
];

@NgModule ({
    declarations: [
        FormElementsComponent,
        Autosize
    ],
    imports: [
        CommonModule,
        SharedModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(formElementsRoutes)
    ]
})

export class FormElementsModule {  }
