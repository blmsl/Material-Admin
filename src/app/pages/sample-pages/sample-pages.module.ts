import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SamplePagesComponent } from "./sample-pages.component";

const samplePagesRoutes : Routes = [
    { path: '', component: SamplePagesComponent }
];

@NgModule ({
    declarations: [
        SamplePagesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(samplePagesRoutes)
    ]
})

export class SamplePagesModule {  }
