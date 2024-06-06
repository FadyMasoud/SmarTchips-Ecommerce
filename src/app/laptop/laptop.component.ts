import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  LAPTOP=[{id:'1',name:'15.6"windos 11 hp"',description:' ',cost:'400',img:'assets/lap/laptop1.png',
  review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'warning'},
  {id:'2',name:' SAMSUNG 14 LAPTOP',description:' ',cost:'380.00',img:'assets/lap/laptop2.png',
  review:'Reviews (43)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'3',name:'ACER ASPI LAPTOP ',description:' ',cost:'540',img:'assets/lap/laptop3.png',
  review:'Reviews (36)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
  {id:'4',name:'HP 18',description:' ',cost:'390',img:'assets/lap/laptop4.png',
  review:'Reviews (21)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'5',name:'DELL INSPRION 15 3000 ',description:' ',cost:'740',img:'assets/lap/laptop5.png',
  review:'Reviews (65)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
  {id:'6',name:'HP NOTEBOOK LAPTOP',description:' ',cost:'760',img:'assets/lap/laptop6.png',
  review:'Reviews (53)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
  ]
}

