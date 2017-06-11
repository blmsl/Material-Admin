import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AlertsComponent } from "./alerts.component";

const alertsRoutes : Routes = [
    { path: '', component: AlertsComponent }
];

@NgModule ({
    declarations: [
        AlertsComponent
    ],
    imports: [
        CommonModule,
        AlertModule.forRoot(),
        BsDropdownModule.forRoot(),
        RouterModule.forChild(alertsRoutes)
    ]
})

export class AlertsModule {  }
