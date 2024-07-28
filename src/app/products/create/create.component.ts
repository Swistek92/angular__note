import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  newProductsForm: Products = {
    id: '0',
    name: '',
    price: 0,
  };

  constructor(
    private ProductsService: ProductsService,
    private router: Router
  ) {}

  createProduct() {
    let id = 0;
    this.newProductsForm.id = String(Math.floor(Math.random() * 999999));

    this.ProductsService.createProduct(this.newProductsForm).subscribe({
      next: () => {
        this.router.navigate(['/products/home']);
      },
      error: (e) => {
        console.error('errror !! ' + e);
      },
    });
  }
}
