import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  editProducts: Products = {
    id: '0',
    name: '',
    price: 0,
  };

  constructor(
    private ProductsService: ProductsService,
    private router: Router,

    private route: ActivatedRoute
  ) {}
  getProductsById(id: string) {
    this.ProductsService.getProductById(id).subscribe((data) => {
      this.editProducts = data;
    });
  }

  ngOnInit(): void {
    const route = this.route.paramMap.subscribe((param) => {
      let id = String(param.get('id'));
      this.getProductsById(id);
    });
  }

  updateProduct() {
    this.ProductsService.updateProduct(this.editProducts).subscribe({
      next: () => {
        this.router.navigate(['/products/home']);
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
