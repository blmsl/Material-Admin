import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ModalsComponent } from './modals.component';

const modalsRoutes: Routes = [
  { path: '', component: ModalsComponent }
]

@NgModule({
  declarations: [
    ModalsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(modalsRoutes)
  ]
})

export class ModalsModule { }
