import { Injectable, OnInit } from '@angular/core';
import { Products } from '../products/products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Products[]>(this.url);
  }
  createProduct(newProducts: Products) {
    return this.http.post<Products>(this.url, newProducts);
  }
  getProductById(id: String) {
    const prod = this.http.get<Products>(`${this.url}/${id}`);
    console.log(prod);
    return prod;
  }
  updateProduct(data: Products) {
    return this.http.put(`${this.url}/${data.id}`, data);
  }
  deteleProduct(id: String) {
    return this.http.delete<Products>(`${this.url}/${id}`);
  }
}
