import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  offset: number = 0;
  pageSize: number = 10;
  totalCount: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.pageSize, this.offset).subscribe({
      next: (response) => {
        this.products = response.products;
        this.totalCount = response.totalCount;
      },
      error: (error) => console.error('Error fetching products:', error),
    });
  }

  nextPage(): void {
    this.offset += this.pageSize;
    this.loadProducts();
  }

  previousPage(): void {
    if (this.offset > 0) {
      this.offset -= this.pageSize;
      this.loadProducts();
    }
  }

}
