import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../product.model';
@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  @Input() product: Product | undefined;

  constructor(private productService: ProductService) {}

  updateProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.product)
    }
  }
}
