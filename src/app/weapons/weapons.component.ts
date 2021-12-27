import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  responseGun: any;
  response: any;

  ngOnInit() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
    }

      console.log(this.responseGun);
      this.http.get("https://fortniteapi.io/v1/loot/list?lang=fr", header)
    .subscribe((response) => {
      this.responseGun = response;
      console.log(this.responseGun);
    })
  }
}
