import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { CarouselComponent } from './carousel.component';

const carouselRoutes: Routes = [
  { path: '', component: CarouselComponent }
]

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forChild(carouselRoutes)
  ]
})

export class CarouselComponentModule { }
