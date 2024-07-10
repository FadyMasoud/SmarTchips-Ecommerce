import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any = [];

@Input() rating: number = 3;
@Input() maxRating: number = 5;

stars: boolean[] = [];
  
  
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
    this.stars = Array(this.maxRating).fill(false).map((_, index) => index < this.rating);
    // let idcategory = this.route.snapshot.paramMap.get('cat_id');
    // console.log(idcategory);
    // let cond = 'cat_id=' + idcategory;
    this.api.get_products('').subscribe({
      next: (data: any) => {
        for(let emp of data){
          emp.new_pd_id=btoa(emp.pd_id)
        }
        console.log(data);
        this.products = data;
        
      }
    });
  }
}
