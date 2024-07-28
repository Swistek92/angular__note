import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ProductsHomeComponent, CreateComponent, EditComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}
