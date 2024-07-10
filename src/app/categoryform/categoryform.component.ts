// categoryform.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-categoryform',
  templateUrl: './categoryform.component.html',
  styleUrls: ['./categoryform.component.css']
})
export class CategoryformComponent implements OnInit {
  formpcategory: FormGroup;
  message2 = '';
  message = '';
  category: any = [];
  id: any;
  username: any;
  fileToUpload: File | null = null;

  constructor(
    private formBuilder: FormBuilder,private api: ApiService, private route: ActivatedRoute,private sanitizer: DomSanitizer) {
    this.formpcategory = this.formBuilder.group({
      id: [''],
      categoryname: ['', Validators.required],
      name: ['', Validators.required],
      cost: ['', Validators.required],
      review: ['', Validators.required],
      description: ['', Validators.required],
      star: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];  // Store the file in a variable
    }
  }

  get f() {
    return this.formpcategory.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('cat_id');
    console.log( this.id);
    // if (hashedId) {
    //   let id = atob(hashedId);
    //   this.idproduct = id;
    // } else {
    //   console.error('ID parameter is missing');
    // }


    let cond = 'cat_id=' + this.id;
    this.api.get_category(cond).subscribe({
      next: (data: any) => {
        for (let emp of data) {
          // emp.new_cat_id = btoa(emp.cat_id);

          emp.file = this.api.baseurl + emp.file
        }
        this.category = data[0];
        if(this.id){
        this.formpcategory.patchValue({
          id: this.category.cat_id,
          categoryname: this.category.cat_name,
          name: this.category.cat_pd_name,
          cost: this.category.cat_pd_cost,
          review: this.category.cat_pd_review,
          description: this.category.cat_pd_description,
          star: this.category.cat_pd_star,
          file: this.category.cat_pd_img
        });
      }else {
        this.formpcategory.patchValue({
          id: '',
          categoryname: '',
          name: '',
          cost: '',
          review: '',
          description: '',
          star: '',
          file: ''
        });
      }
      }
    });
  }

  submit() {
    this.message = '';
    this.message2 = '';

    const formData = new FormData();
    formData.append('cat_id', this.formpcategory.controls['id'].value);
    formData.append('cat_name', this.formpcategory.controls['categoryname'].value);
    formData.append('cat_pd_name', this.formpcategory.controls['name'].value);
    formData.append('cat_pd_cost', this.formpcategory.controls['cost'].value);
    formData.append('cat_pd_review', this.formpcategory.controls['review'].value);
    formData.append('cat_pd_description', this.formpcategory.controls['description'].value);
    formData.append('cat_pd_star', this.formpcategory.controls['star'].value);

    if (this.fileToUpload) {
      formData.append('cat_pd_img', this.fileToUpload);  // Append the file only if it is selected
    }

    if (this.id) {
      this.api.update_category(formData)
        .subscribe({
          next: (data: any) => {
            if (data['message'] == "Category updated successfully") {
              this.message = "Category data updated successfully.";
            } else if (data['message'] == "Category already exists") {
              this.message2 = "Category already exists";
            } else if (data['message'] == "Category not found") {
              this.message2 = "Category not found";
            } else {
              this.message2 = "Failed to update category record.";
            }
          }
        });
    } else {
      this.api.insert_category(formData)
        .subscribe({
          next: (data: any) => {
            if (data['message'] == "Category inserted successfully") {
              this.message = "Category added successfully.";
            } else if (data['message'] == "Category already exist") {
              this.message2 = "Category already exists";
            } else {
              this.message2 = "Failed to insert category.";
            }
          }
        });
    }
  }
}