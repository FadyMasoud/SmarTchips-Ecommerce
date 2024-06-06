import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form : FormGroup
  message:string = ''

  constructor(private formbuilder:FormBuilder,private router: Router){
    this.form=this.formbuilder.group({
      username:['',[Validators.required]],
      mail:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required]],
      phone:['',[Validators.required]],
      position:['',[Validators.required]]
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
    // Extract the form values
    const {username, email, password, phone, position} = this.form.value;

    // Check if the form is valid
    if(this.form.valid){
      // Navigate to the home page and reload the page
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      })
    }else{
      // Display a failure message
      this.message="*Sign-up Failed*"
    }
  }
}

