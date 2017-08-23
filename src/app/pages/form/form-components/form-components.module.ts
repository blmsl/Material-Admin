import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { Select2Module } from 'ng2-select2';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ColorPickerModule } from 'ngx-color-picker';
import { NouisliderModule } from 'ng2-nouislider';
import { FormComponentsComponent } from './form-components.component';

const formComponentsRoutes: Routes = [
  { path: '', component: FormComponentsComponent }
];

@NgModule({
  declarations: [
    FormComponentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TextMaskModule,
    Select2Module,
    BsDropdownModule.forRoot(),
    ColorPickerModule,
    NouisliderModule,
    RouterModule.forChild(formComponentsRoutes)
  ]
})

export class FormComponentsModule { }
