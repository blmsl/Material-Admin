import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { SortableComponent } from "./sortable.component";

const sortableRoutes : Routes = [
    { path: '', component: SortableComponent }
]

@NgModule ({
    declarations: [
        SortableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        SortableModule.forRoot(),
        RouterModule.forChild(sortableRoutes)
    ]
})

export class SortableComponentModule {  }
