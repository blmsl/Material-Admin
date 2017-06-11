import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from "./calendar.component";

const calendarRoutes : Routes = [
    { path: '', component: CalendarComponent }
];

@NgModule ({
    declarations: [
        CalendarComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(calendarRoutes)
    ]
})

export class CalendarModule {  }
