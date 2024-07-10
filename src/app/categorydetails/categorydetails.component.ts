import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent {
  category:any=[]
  message:any

  id:any
  
  
  constructor(private route: ActivatedRoute,private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    // const hashedId = this.route.snapshot.paramMap.get('cat_id');
    // if(hashedId){
    //   this.id = atob(hashedId);
    //   console.log(this.id);
    // }else{
    //   console.error('ID parameter is missing');
      
    // }
    // console.log(id);
    this.id = this.route.snapshot.paramMap.get('cat_id');
    console.log(this.id);

    let cond = 'cat_id=' + this.id;

    this.api.get_category(cond)
    .subscribe({ next:(data:any)=>{
      console.log(data[0])
      for(let emp of data){
        emp.new_cat_pd_img=this.api.baseurl+emp.cat_pd_img
      }
      this.category=data[0]
    }})

  
  }

  delete(): void {
    this.id = this.route.snapshot.paramMap.get('cat_id');
    // if(hashedId){
    //   this.id = atob(hashedId);
    //   console.log(this.id);
    // }else{
    //   console.error('ID parameter is missing');
    // }
    console.log(this.id);
   
   
    this.api.delete_category(this.id)
      .subscribe({  next: (data: any) => {
             console.log(data);
             this.message=data['message']
             this.router.navigate(['dashboard']);
          // Redirect or perform any other action after successful deletion
        },
        error: (err: any) => {
          console.log(err);
          // Handle error
        }
      });
    }
  }




//  delete() {
  
//     this.idproduct=this.route.snapshot.paramMap.get('pd_id')
//     console.log(this.idproduct)
   
//     this.api.delete_product(this.idproduct)
//     .subscribe({ next:(data:any)=>{
//       // console.log(data['message'])
//       this.message=data['message']
//       this.router.navigate(['dashboard']);


//    }});
//   }
