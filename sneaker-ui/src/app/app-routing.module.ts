import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'
import { CustomerComponent } from './components/customer/customer.component'

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  }
];

@NgModule({
  declarations: [],
  //imports: [ CommonModule ],
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
