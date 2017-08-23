import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { TypeaheadComponent } from './typeahead.component';

const typeaheadRoutes: Routes = [
  { path: '', component: TypeaheadComponent }
]

@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    RouterModule.forChild(typeaheadRoutes)
  ]
})

export class TypeaheadComponentModule { }
