import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  formProduct: FormGroup;
  message2 = '';
  message = '';
  product: any = [];
  id: any;
  fileToUpload: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.formProduct = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      cost: ['', Validators.required],
      review: ['', Validators.required],
      star: ['', Validators.required],
      categoryID: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  get f() {
    return this.formProduct.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('pd_id');
    this.loadProductData(this.id);
  }

  loadProductData(id: any) {
    if (id) {
      let cond = 'pd_id=' + id;
      this.api.get_products(cond).subscribe({
        next: (data: any) => {
          if (data && data.length > 0) {
            this.product = data[0];
            this.formProduct.patchValue({
              id: this.product.pd_id,
              name: this.product.pd_name,
              description: this.product.pd_description,
              cost: this.product.pd_cost,
              review: this.product.pd_review,
              star: this.product.pd_star,
              categoryID: this.product.pd_category_ID,
              file: this.product.pd_img
            });
          }
        }
      });
    }
  }

  submit() {
    this.message = '';
    this.message2 = '';

    const formData = new FormData();
    formData.append('pd_id', this.f['id'].value);
    formData.append('pd_name', this.f['name'].value);
    formData.append('pd_description', this.f['description'].value);
    formData.append('pd_cost', this.f['cost'].value);
    formData.append('pd_review', this.f['review'].value);
    formData.append('pd_star', this.f['star'].value);
    formData.append('pd_category_ID', this.f['categoryID'].value);

    if (this.fileToUpload) {
      formData.append('pd_img', this.fileToUpload);
    }

    if (this.id) {
      this.api.update_product(formData)
        .subscribe({
          next: (data: any) => {
            if (data['message'] === 'Product updated successfully') {
              this.message = 'Product data updated successfully.';
            } else if (data['message'] === 'Product already exists') {
              this.message2 = 'Product already exists';
            } else if (data['message'] === 'Product not found') {
              this.message2 = 'Product not found';
            } else {
              this.message2 = 'Failed to update product record.';
            }
          }
        });
    } else {
      this.api.insert_product(formData)
        .subscribe({
          next: (data: any) => {
            if (data['message'] === 'Product inserted successfully') {
              this.message = 'Product added successfully.';
            } else if (data['message'] === 'Product already exists') {
              this.message2 = 'Product already exists';
            } else {
              this.message2 = 'Failed to insert product.';
            }
          }
        });
    }
  }
}
