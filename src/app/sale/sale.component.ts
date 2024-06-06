import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  saleproduct=[{id:'1',name:'ps 113 overplay',description:' ',cost:'550',newcost:'490',img:'assets/ps/6.png',
  review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'warning'},
  {id:'2',name:' BLACK JPLMASS',description:' ',cost:'260.00',newcost:'240',img:'assets/headphone/5.png',
  review:'Reviews (43)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'}
  
  ]
}
