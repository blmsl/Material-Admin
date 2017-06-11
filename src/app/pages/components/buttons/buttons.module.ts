import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ButtonsComponent } from "./buttons.component";

const buttonsRoutes : Routes = [
    { path: '', component: ButtonsComponent }
]

@NgModule ({
    declarations: [
        ButtonsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        RouterModule.forChild(buttonsRoutes)
    ]
})

export class ButtonsComponentModule {  }
