import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  // images = [{src:'assets/pexels-garrettmorrow-1649771.jpg',dscript:'YOUR PRODUCTS +"<br>" ARE GREATE'},
  // {src:'assets/pexels-marinko-krsmanovic-700471-2651794.jpg',dscript:'YOUR PRODUCTS +"<br>" ARE GREATE'},
  // {src:'assets/pexels-noah-erickson-97554-404280.jpg',dscript:'YOUR PRODUCTS +"<br>" ARE GREATE'},
  // {src:'assets/pexels-ferarcosn-191877.jpg',dscript:'YOUR PRODUCTS +"<br>" ARE GREATE'}]
constructor(private router:Router){}
isloginslide(){
  console.log(this.router.url)
  return  this.router.url=='/signup' || this.router.url=='/login' || 
  this.router.url=='/mobile' ||this.router.url=='/camera' || this.router.url=='/laptop' || 
  this.router.url=='/headphone' || this.router.url=='/smartwatch' ||
  this.router.url=='/ps'|| this.router.url=='/sale'|| this.router.url=='/product' 
}
}