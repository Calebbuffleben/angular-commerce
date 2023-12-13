import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(updateProduct: Product): void {
    const index = this.products.findIndex((p) => p.id === updateProduct.id);

    if (index !== -1) {
      this.products[index] = updateProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((p) => p.id !== id)
  }
}
