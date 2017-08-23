import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AccordionComponent } from './accordion.component';

const accordionRoutes: Routes = [
  { path: '', component: AccordionComponent }
]

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    RouterModule.forChild(accordionRoutes)
  ]
})

export class AccordionComponentModule { }
