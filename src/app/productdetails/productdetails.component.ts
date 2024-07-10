import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  product: any = {};
  
  message:any
  message2:any

  id:any
  

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('pd_id');
   
      console.log(this.id);
   
    const cond = 'pd_id=' + this.id;

    this.api.get_products(cond)
      .subscribe({ next:(data:any)=>{
      console.log(data[0])
      for(let emp of data){
        
        emp.new_pd_img=this.api.baseurl+emp.pd_img
      }
      this.product=data[0]
     
    }})
  }

  delete() {
  
    this.id = this.route.snapshot.paramMap.get('pd_id');
   
      console.log(this.id);
   
   
   
    this.api.delete_product(this.id)
    .subscribe({ next:(data:any)=>{
      // console.log(data['message'])
      this.message=data['message']
      this.router.navigate(['dashboard']);


   }});
  }
}

