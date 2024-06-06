import { Component } from '@angular/core';

@Component({
  selector: 'app-smartwatch',
  templateUrl: './smartwatch.component.html',
  styleUrls: ['./smartwatch.component.css']
})
export class SmartwatchComponent {
  WATCH=[{id:'1',name:'IOWODO Smart Watch',description:' ',cost:'300',img:'assets/watch/1.png',
  review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
  {id:'2',name:' Fitpolo Smart Watch',description:' ',cost:'380.00',img:'assets/watch/2.png',
  review:'Reviews (43)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'3',name:'Smart Watch, Fitness',description:' ',cost:'240',img:'assets/watch/3.png',
  review:'Reviews (36)',star1:'warning',star2:'warning',star3:'muted',star4:'muted',star5:'muted'},
  {id:'4',name:'Apple Watch Series 7',description:' ',cost:'1200',img:'assets/watch/4.png',
  review:'Reviews (55)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'5',name:'RUIMEN Smart',description:' ',cost:'1100',img:'assets/watch/5.png',
  review:'Reviews (50)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'6',name:'AGPTEK Smart Watch',description:' ',cost:'1500',img:'assets/watch/6.png',
  review:'Reviews (75)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'7',name:'TOZO 2024 New ',description:' ',cost:'1290',img:'assets/watch/7.png',
  review:'Reviews (40)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'8',name:'RUIMEN Smart ',description:' ',cost:'1350',img:'assets/watch/8.png',
  review:'Reviews (35)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
  {id:'9',name:'Samsung Gear S7',description:' ',cost:'1450',img:'assets/watch/9.png',
  review:'Reviews (25)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'}
  
  ]
}

