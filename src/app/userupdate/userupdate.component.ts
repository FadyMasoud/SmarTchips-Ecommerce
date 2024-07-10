import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent {
  form:FormGroup
  message2=''
  message=''
  users:any=[]
  iduser:any
  username:any=''
  constructor(private formBuilder : FormBuilder,private api:ApiService,private route:ActivatedRoute){
    this.form= this.formBuilder.group({
      username:['',[Validators.required]],
      mail:['',[Validators.required, Validators.email]],
      pass:['',[Validators.required]],
      phone:[''],
      position:[''],
      id:['']
    });
  }
 
  get f(){
    return this.form.controls;
  }
  ngOnInit():void{
    
    const hashedId = this.route.snapshot.paramMap.get('us_id');
    if(hashedId){
      this.iduser = atob(hashedId);
      console.log(this.iduser);
    }else{
      console.error('ID parameter is missing');
      
    }
    let cond='us_id='+this.iduser
    this.api.get_users(cond)
    .subscribe({ next:(data:any)=>{
      console.log(data[0])
      this.users=data[0]
      this.form.patchValue({
        username:this.users.us_username,
        mail:this.users.us_email,
        pass:this.users.us_password,
        phone:this.users.us_phone,
        position:this.users.us_postion,
        id:this.users.us_id
      })
    }})
  }
  submit(){
    this.message=''
    this.message2=''
    console.log(this.form.value)
    if(this.iduser){
      this.api.update_users(this.form.value)
      .subscribe({ next:(data:any)=>{
         console.log(data['message'])
         if(data['message'] == "User data updated successfully"){
             this.message="User data updated successfully."
         }else if(data['message'] == "Email already exists"){
          this.message2="Email already exists"
         }else if(data['message'] == "User not found"){
          this.message2="User not found"
         }
         else{
          this.message2="Failed to update record:"
         }
      }})
    }else{
      this.api.insert_users(this.form.value)
      .subscribe({ next:(data:any)=>{
         console.log(data['message'])
         if(data['message'] == "User registered successfully."){
             this.message="User registered successfully."
         }else if(data['message'] == "This Data already exists before."){
          this.message2="This Data already exists before."
         }else{
          this.message2="Error registering user."
         }
      }})
    }
   
  }
}