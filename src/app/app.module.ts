import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { StatisticsComponent } from './statistics/statistics.component';
import { BattlePassRewardsComponent } from './battle-pass-rewards/battle-pass-rewards.component';
import { dailyshopComponent} from './daily-shop/daily-shop.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { FishComponent } from './fish/fish.component';
import { WeaponsComponent } from './weapons/weapons.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    StatisticsComponent,
    dailyshopComponent,
    MapComponent,
    HeaderComponent,
    BattlePassRewardsComponent,
    AboutComponent,
    FishComponent,
    WeaponsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
