import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-daily-shop',
  templateUrl: './daily-shop.component.html',
  styleUrls: ['./daily-shop.component.css']
})
export class dailyshopComponent implements OnInit {

  response: any;
  responseShop: any;
  i: number = -1;

 //afficher un minuteur pour indiquer le reset du shop (Tous les jours à 2h du matin)
 date = new Date();
 hoursNow = new Date().getHours();
 minutesNow = new Date().getMinutes();
 secondesNow = new Date().getSeconds();
 hoursLeft: number = 24 - this.hoursNow; //nbr d'heures jusqu'à minuit
 minutesLeft: number = 60 - this.minutesNow; //nbr de minutes jusqu'à la prochaine heure
 secondesLeft: number = 60 - this.secondesNow; //nbr de seconde jusqu'à la prochaine minute
 countDown: number = (this.hoursLeft*3600) + (this.minutesLeft*60) + this.secondesLeft; //secondes restantes jusqu'à 2h du matin


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
  retourGrille(): void{
    this.i = -1;
  }

  sendNumber(i: number): void{
    this.i = i;
    console.log(this.i);
  }
}


