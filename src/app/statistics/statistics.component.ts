import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  response: any;
  responseUserId: any;
  responseStats: any;

  namePlayer: string ="";
  name: string ="";
  idPlayer: string = "";

  constructor(private http: HttpClient, private communicationService: CommunicationService) { }

  ngOnInit() {

  }

  sendData(): void {
        this.communicationService.pushData(this.name);
        console.log(this.name);
      }


  sendApi(): void {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
    }
    this.http.get("https://fortniteapi.io/v1/lookup?username=" + this.name, header)
    .subscribe((response) => {
      this.responseUserId = response;
      this.idPlayer = this.responseUserId.account_id;
      console.log(this.responseUserId);
      //await delay(1000);
    })

    // if(this.idPlayer != "")
    this.http.get("https://fortniteapi.io/v1/stats?account=" + this.idPlayer, header)
    .subscribe((response3) => {
      this.responseStats = response3;
      console.log(this.responseStats);
    })
  }


}
