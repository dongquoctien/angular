import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl ='https://651642de09e3260018c994f4.mockapi.io/api/v1';

  constructor( private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/Product`);
  }

}
