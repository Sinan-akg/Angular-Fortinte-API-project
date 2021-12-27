import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-daily-shop',
  templateUrl: './daily-shop.component.html',
  styleUrls: ['./daily-shop.component.css']
})
export class dailyshopComponent implements OnInit {

  response: any;
  responseShop: any;



  constructor(private http: HttpClient) { }

  ngOnInit() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
    }

    this.http.get("https://fortniteapi.io/v2/shop?lang=fr", header)
    .subscribe((response) => {
      this.responseShop = response;
      console.log(this.responseShop);
    })
  }
}


