import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  randomproduct=[
    {id:'1',name:'ps 113 overplay',description:' ',cost:'550',newcost:'490',img:'assets/ps/6.png',
    review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'warning'},
    {id:'2',name:'  JPL 511MASS',description:' ',cost:'260.00',newcost:'240',img:'assets/headphone/5.png',
    review:'Reviews (43)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
    {id:'3',name:'Galaxy S23 ultra',description:' ',cost:'1000',newcost:'850',img:'assets/mob/samsung4.png',
    review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
    {id:'4',name:'Iphone 14 pro max',description:' ',cost:'1000',newcost:'800',img:'assets/mob/mobile3.png',
    review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'}
  
  ]
}
