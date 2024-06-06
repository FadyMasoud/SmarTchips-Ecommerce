import { Component } from '@angular/core';

@Component({
  selector: 'app-ps',
  templateUrl: './ps.component.html',
  styleUrls: ['./ps.component.css']
})
export class PsComponent {
  PLAY=[
    {id:'1',name:'PlayStation®5 (slim)',description:' ',cost:'300',img:'assets/ps/1.png',
    review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
    {id:'2',name:'PlayStation VR2 (PSVR2) ',description:' ',cost:'380.00',img:'assets/ps/2.png',
    review:'Reviews (43)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
    {id:'3',name:'50 PlayStation',description:' ',cost:'240',img:'assets/ps/3.png',
    review:'Reviews (36)',star1:'warning',star2:'warning',star3:'muted',star4:'muted',star5:'muted'},
    {id:'4',name:'Sony PlayStation Classic ',description:' ',cost:'400',img:'assets/ps/4.png',
    review:'Reviews (22)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
    {id:'5',name:'PULSE Explore Wireless',description:' ',cost:'450',img:'assets/ps/5.png',
    review:'Reviews (21)',star1:'warning',star2:'warning',star3:'warning',star4:'warning',star5:'muted'},
    {id:'6',name:'PlayStation DualSense® ',description:' ',cost:'500',img:'assets/ps/6.png',
    review:'Reviews (24)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
    {id:'7',name:'PlayStation 5 Digital ',description:' ',cost:'550',img:'assets/ps/7.png',
    review:'Reviews (23)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
    {id:'8',name:'FYOUNG Carrying ',description:' ',cost:'600',img:'assets/ps/8.png',
    review:'Reviews (22)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'},
    {id:'9',name:'amFilm 2 Pack Screen',description:' ',cost:'650',img:'assets/ps/9.png',
    review:'Reviews (21)',star1:'warning',star2:'warning',star3:'warning',star4:'muted',star5:'muted'}
  ]
}

