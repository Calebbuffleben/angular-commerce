import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProduct: Product = {id: 0, name: '', price: '0' }

  constructor(private productService: ProductService) {}
}
