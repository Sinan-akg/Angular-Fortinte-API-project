import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  constructor(private http: HttpClient) { }

  responseFish: any;
  response: any;
  ngOnInit() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
    }

    this.http.get("https://fortniteapi.io/v1/loot/fish?lang=fr", header)
    .subscribe((response) => {
      this.responseFish = response;
    })
  }
}
