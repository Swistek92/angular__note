import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Random1Component } from '../random1/random1.component';
import { Random2Component } from '../random2/random2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: Random1Component },
      { path: 'user', component: Random1Component },
      { path: 'user2', component: Random2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
