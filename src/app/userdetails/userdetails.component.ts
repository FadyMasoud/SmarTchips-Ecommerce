import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  user:any=[]
  message:any
  id:any
  constructor(private route: ActivatedRoute,private apiservice:ApiService,private router :Router) { }

  ngOnInit(): void {
    const hashedId = this.route.snapshot.paramMap.get('us_id');
    if(hashedId){
      this.id = atob(hashedId);
      console.log(this.id);
    }else{
      console.error('ID parameter is missing');
      
    }
    let cond = 'us_id=' + this.id;

    this.apiservice.get_users(cond)
    .subscribe({ next:(data:any)=>{
      console.log(data[0])
      this.user=data[0]
    }})

  
  }
  delete() {
    const hashedId = this.route.snapshot.paramMap.get('us_id');
    if(hashedId){
      this.id = atob(hashedId);
      console.log(this.id);
    }else{
      console.error('ID parameter is missing');
      
    }
    this.apiservice.delete_users(this.id)
    .subscribe({ next:(data:any)=>{
      // console.log(data['message'])
      this.message=data['message']
      this.router.navigate(['dashboard']);
   }});
  }
}


// delete() {
  
//   this.idproduct=this.route.snapshot.paramMap.get('pd_id')
//   console.log(this.idproduct)
 
//   this.api.delete_product(this.idproduct)
//   .subscribe({ next:(data:any)=>{
//     // console.log(data['message'])
//     this.message=data['message']
//     this.router.navigate(['dashboard']);


//  }});
// }
