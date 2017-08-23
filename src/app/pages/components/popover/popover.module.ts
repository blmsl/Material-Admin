import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { PopoverComponent } from './popover.component';

const popoverRoutes: Routes = [
  { path: '', component: PopoverComponent }
]

@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    RouterModule.forChild(popoverRoutes)
  ]
})

export class PopoverComponentModule { }
