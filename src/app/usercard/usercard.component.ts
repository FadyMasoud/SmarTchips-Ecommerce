import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  usercards: any[] = [];
  us_id: number;
  baseurl="http://localhost/apis/day%201";
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const userData = JSON.parse(localStorage.getItem('user_data_login') || '{}');
    this.us_id = userData.us_id;
  }

  ngOnInit() {
    this.getUsercards();
  }

  getUsercards() {
    this.http.get<any[]>(this.baseurl+`/api/usercard.php?action=get&user_id=${this.us_id}`).subscribe(
      data => this.usercards = data,
      error => console.error(error)
    );
  }
}
