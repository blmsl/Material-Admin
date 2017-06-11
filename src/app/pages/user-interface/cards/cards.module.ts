import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CardsComponent } from "./cards.component";

const cardsRoutes : Routes = [
    { path: '', component: CardsComponent }
];

@NgModule ({
    declarations: [
        CardsComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(cardsRoutes)
    ]
})

export class CardsModule {  }
