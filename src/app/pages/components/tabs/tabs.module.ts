import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { TabsComponent } from './tabs.component';

const tabsRoutes: Routes = [
  { path: '', component: TabsComponent }
]

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forChild(tabsRoutes)
  ]
})

export class TabsComponentModule { }
