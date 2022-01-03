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

  name: string ="";
  daysPlayedSoloNumber: number =0;
  daysPlayedSolo: string="";
  daysPlayedDuoNumber: number = 0;
  daysPlayedDuo: string = "";
  daysPlayedSquadNumber: number = 0;
  daysPlayedSquad: string = "";
  allDaysPlayedNumber: number=0;
  allDaysPlayed: string ="";
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
    })

    this.http.get("https://fortniteapi.io/v1/stats?account=" + this.idPlayer, header)
    .subscribe((response3) => {
      this.responseStats = response3;

      this.daysPlayedSoloNumber = (((Number(this.responseStats.global_stats.solo.minutesplayed))/60)/24);
      this.daysPlayedSolo = (this.daysPlayedSoloNumber).toFixed(2);

      this.daysPlayedDuoNumber = ((Number(this.responseStats.global_stats.duo.minutesplayed))/60)/24;
      this.daysPlayedDuo = (this.daysPlayedDuoNumber).toFixed(2);

      this.daysPlayedSquadNumber = ((Number(this.responseStats.global_stats.squad.minutesplayed))/60)/24;
      this.daysPlayedSquad = (this.daysPlayedSquadNumber).toFixed(2);
      this.allDaysPlayedNumber = this.daysPlayedSoloNumber + this.daysPlayedDuoNumber + this.daysPlayedSquadNumber
      this.allDaysPlayed = (this.allDaysPlayedNumber).toFixed(2);
      console.log(this.responseStats);
    })
  }


}
