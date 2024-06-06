import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private route:Router){}
ngOnInit(){
  // console.log(this.route.url)

}
  isloginnav(){
    // console.log(this.route.url)
    return this.route.url =='/login' || this.route.url =='/signup'
  }
}
