import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-battle-pass-rewards',
  templateUrl: './battle-pass-rewards.component.html',
  styleUrls: ['./battle-pass-rewards.component.css']
})
export class BattlePassRewardsComponent implements OnInit {

  response: any;
  responsePass :any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'b3f9ec87-1790b2cb-8a5a4f72-1c3f3fe2')
    }

      console.log(this.responsePass);
      this.http.get("https://fortniteapi.io/v2/battlepass?lang=fr&season=current", header)
    .subscribe((response) => {
      this.responsePass = response;
      console.log(this.responsePass);
    })
  }
}
