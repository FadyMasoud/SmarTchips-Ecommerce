import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form : FormGroup
  message:string = ''
  message2:string=''

  constructor(private formbuilder:FormBuilder,private router: Router,private api: ApiService){
    this.form=this.formbuilder.group({
      username:['',[Validators.required]],
      mail:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]],
      position:['',[Validators.required]],
      phone:['']
      
      
    })
  }
  get f(){
    return this.form.controls
  }
  /**
   * Submit the form to sign up a new user.
   * If the form is valid, navigate to the home page and reload the page.
   * If the form is invalid, display a failure message.
   */
  submit(){
    this.message='';
    this.message2='';
    this.api.insert_users(this.form.value)
    .subscribe({next:(data:any)=>{
      console.log(data['message'])
      if(data['message']== "User registered successfully."){
        this.message="User registered successfully.";
        const {username, email, password, phone} = this.form.value;
    if(this.form.valid){
      // Navigate to the home page and reload the page
      this.router.navigate(['login']).then(() => {
        window.location.reload();
      })
    }else{
      // Display a failure message
      this.message="*Sign-up Failed*"
    }
      }
      else if(data['message']== "This Data already exists before."){
        this.message2="This Data already exists before.";
      }
      else {
        this.message2="Error :: failed registering user.";

      }


    }})

    // Extract the form values
    

    // Check if the form is valid
  }
}

