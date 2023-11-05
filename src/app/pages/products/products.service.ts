import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@app/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(limit: number = 8): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      params: { limit },
    });
  }
}
