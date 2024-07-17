import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getNames(): string[] {
    return ['Angular', 'React', 'MongoDB', 'python', 'typescritp'];
  }
}
