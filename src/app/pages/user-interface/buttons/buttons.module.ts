import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ButtonsComponent } from './buttons.component';

const buttonsRoutes: Routes = [
  { path: '', component: ButtonsComponent }
];

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(buttonsRoutes)
  ]
})

export class ButtonsModule { }
