import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(pageSize: number, offset: number): Observable<{ products: Product[], totalCount: number }> {
    const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('offset', offset.toString());
    return this.http.get<{ products: Product[], totalCount: number }>(this.baseUrl + '/api/admin/list-products', { params });
  }

}
