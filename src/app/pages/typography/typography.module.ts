import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TypographyComponent } from './typography.component';

const typographyRoutes: Routes = [
  { path: '', component: TypographyComponent }
];

@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(typographyRoutes)
  ]
})

export class TypographyModule { }
