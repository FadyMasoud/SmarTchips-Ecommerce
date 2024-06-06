import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form : FormGroup
  message:any=''
  constructor(private formbuilder:FormBuilder,private router: Router){
    this.form=this.formbuilder.group({
      mail:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]],
      
    })
  }
  get f(){
    return this.form.controls
  }
  submit(){
    console.log(this.form.value)
    if(this.form.value.mail == 'admin@gmail.com' && this.form.value.pass=='123456'){
      this.message="login successfully"
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      })
    }else{
      this.message="*login falied*"
  
    }
  }
}
