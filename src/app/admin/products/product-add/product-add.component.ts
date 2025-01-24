import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-product-add',
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent  implements OnInit{
  productForm: FormGroup;
  selectedFile: File | null = null;
  units = ['KG', 'G', 'PIECE', 'LITRE'];
  categories = ['Fruits', 'Organic', 'Juices'];
  private baseUrl = environment.apiUrl;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      unit: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      categories: [[]],
    });
  }

  ngOnInit(): void {
    
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      alert('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify(this.productForm.value)], { type: 'application/json' }));
    formData.append('image', this.selectedFile);

    this.http.post(this.baseUrl + '/api/admin/add-product', formData).subscribe({
      next: (response) => {
        alert('Product added successfully!');
        this.productForm.reset();
        this.selectedFile = null;
      },
      error: (error) => {
        console.error('Error adding product:', error);
        alert('Failed to add product. Please try again.');
      },
    });
  }
}
