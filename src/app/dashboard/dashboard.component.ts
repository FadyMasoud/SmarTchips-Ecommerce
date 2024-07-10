import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: any = [];
  users:any=[];
  category:any=[];
  
  constructor(private route: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
    // let idcategory = this.route.snapshot.paramMap.get('cat_id');
    // console.log(idcategory);
    // let cond = 'cat_id=' + idcategory;
    this.api.get_products('').subscribe({
      next: (data: any) => {
        console.log(data);
        for(let emp of data){
          // emp.new_pd_id=btoa(emp.pd_id)
          emp.new_pd_img=this.api.baseurl+emp.pd_img
        }
        this.products = data;
        
      }
    });

    this.api.get_users('').subscribe({
      next: (data: any) => {
        console.log(data);
        // for(let emp of data){
        // //   emp.new_us_id=btoa(emp.us_id)
        // // emp.new_cat_pd_img=this.api.baseurl+emp.cat_pd_img
        // }
        this.users = data;
        
      }
    });

    this.api.get_categories('').subscribe({
      next: (data: any) => {
        console.log(data);
        for(let emp of data){
          // emp.new_cat_id=btoa(emp.cat_id)
          emp.new_cat_pd_img=this.api.baseurl+emp.cat_pd_img
        }
        this.category = data;
        
      }
    });

  }

}
