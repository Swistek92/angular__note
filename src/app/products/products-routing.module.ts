import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'products/home', component: ProductsHomeComponent },
  { path: 'products/edit/:id', component: EditComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products', redirectTo: 'products/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
