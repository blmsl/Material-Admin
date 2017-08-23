import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';

import { RatingComponent } from './rating.component';

const ratingRoutes: Routes = [
  { path: '', component: RatingComponent }
]

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RatingModule.forRoot(),
    RouterModule.forChild(ratingRoutes)
  ]
})

export class RatingComponentModule { }
