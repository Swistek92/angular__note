import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { First2Component } from './first2.component';

const routes: Routes = [{ path: '', component: First2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class First2RoutingModule { }
