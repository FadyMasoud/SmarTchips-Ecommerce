import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  category:any=[]
  product: any;
  
logout() {
  localStorage.removeItem('user_data_login');
}
constructor(private route:Router,private api:ApiService){}
ngOnInit(){
  // console.log(this.route.url)
  this.api.get_categories('').subscribe({
    next: (data: any) => {
      for(let emp of data){
        emp.new_cat_id=btoa(emp.cat_id)
      }
      console.log(data);
      this.category = data;
      
    }
  });


  this.api.get_products('').subscribe({
    next: (data: any) => {
      for(let emp of data){
        emp.new_pd_id=btoa(emp.pd_id)
      }
      console.log(data[0]);
      this.product = data[0];
      
    }
  });

}
  isloginnav(){
    // console.log(this.route.url)
    return this.route.url =='/login' || this.route.url =='/signup'
  }
}
