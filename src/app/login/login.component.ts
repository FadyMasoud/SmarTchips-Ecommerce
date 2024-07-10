import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formlogin : FormGroup ;
  msg:any='';
  msg2:any='';


  
  constructor(private formbuilder:FormBuilder,private router: Router,private api: ApiService){
    this.formlogin=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      
    })
  }
  get f(){
    return this.formlogin.controls
  }
  submit(){

    this.api.login_users(this.formlogin.value).subscribe({next:(result:any)=>{
      console.log(result['message']);
      if(result['message']=="Email not found"){
        this.msg="Email not found";
        console.log(this.msg)
      }
      else if(result['message']=="Invalid password"){
        this.msg="Invalid password";
        console.log(this.msg)
      }
      else if(result['message']=="Login successful"){
        this.msg2="Login successful";
        console.log(result['user'])
        localStorage.setItem('user_data_login',JSON.stringify(result['user']))
        this.router.navigate(['/home']).then(
          ()=>{
            window.location.reload();
          }
          
        )
      }
      else{
        this.msg="login went wrong";
        console.log(this.msg)
      }

    }})
    // console.log(this.form.value)
    // if(this.form.value.mail == 'admin@gmail.com' && this.form.value.pass=='123456'){
    //   this.message="login successfully"
    //   this.router.navigate(['/home']).then(() => {
    //     window.location.reload();
    //   })
    // }else{
    //   this.message="*login falied*"
  
    // }
  }
}
