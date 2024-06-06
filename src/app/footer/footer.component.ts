import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 constructor(private route:Router){}
  
  islogin() {
    // Check if the current route is '/login' or '/signup'
    return this.route.url == '/signup' || this.route.url == '/login'
  }
}
