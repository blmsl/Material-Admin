import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { TimePickerComponent } from './time-picker.component';

const timePickerRoutes: Routes = [
  { path: '', component: TimePickerComponent }
]

@NgModule({
  declarations: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forChild(timePickerRoutes)
  ]
})

export class TimepickerComponentModule { }
