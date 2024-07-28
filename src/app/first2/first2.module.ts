import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { First2RoutingModule } from './first2-routing.module';
import { First2Component } from './first2.component';


@NgModule({
  declarations: [
    First2Component
  ],
  imports: [
    CommonModule,
    First2RoutingModule
  ]
})
export class First2Module { }
