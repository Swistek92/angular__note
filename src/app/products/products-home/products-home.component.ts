import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css',
})
export class ProductsHomeComponent implements OnInit {
  products: Products[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ProductsService.getProducts().subscribe(
      (data) => (this.products = data)
    );
  }
  deleteProduct(id: String) {
    this.ProductsService.deteleProduct(id).subscribe(() => {
      this.getProducts();
    });
  }
}
