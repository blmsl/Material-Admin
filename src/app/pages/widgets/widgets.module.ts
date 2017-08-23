import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SharedModule } from '../../shared/shared.module';

import { WidgetsComponent } from './widgets.component';

const widgetsRoutes: Routes = [
  { path: '', component: WidgetsComponent }
];

@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(widgetsRoutes)
  ]
})

export class WidgetsModule { }
