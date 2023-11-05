import { Component } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from '@app/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];
  limit = 8;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts(this.limit).subscribe(products => {
      this.products = products;
      this.limit += 8;
    });
  }
}
