import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbarFooterslider: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routesToHide = [
          '/login', 
                  '/category/',
                  '/card/',
                  '/dashboard',
                  '/productform',
                  '/productform/',
                  '/productdetails/',
                  '/userupdate/',
                  '/userupdate',
                  '/userdetails/',
                  '/userdetails',
                  '/categoryform',
                  '/categoryform/',
                  '/categorydetails/',
                  '/categorydetails',
                  '/product/'
        ];

        const dynamicRoutesToHide = [
         '/login', 
                  '/category/',
                  '/card/',
                  '/dashboard',
                  '/productform',
                  '/productform/',
                  '/productdetails/',
                  '/userupdate/',
                  '/userupdate',
                  '/userdetails/',
                  '/userdetails',
                  '/categoryform',
                  '/categoryform/',
                  '/categorydetails/',
                  '/categorydetails',
                  '/product/'
        ];

        // Check if the URL matches static routes
        this.showNavbarFooterslider = !routesToHide.includes(event.url);

        // If not, check if it matches any dynamic routes with encrypted IDs
        if (this.showNavbarFooterslider) {
          this.showNavbarFooterslider = !dynamicRoutesToHide.some(route => 
            event.url.startsWith(route)
          );
        }
      }
    });
  }
}
