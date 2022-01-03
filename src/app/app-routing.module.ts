import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BattlePassRewardsComponent } from './battle-pass-rewards/battle-pass-rewards.component';
import { dailyshopComponent } from './daily-shop/daily-shop.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { FishComponent } from './fish/fish.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
   { path: '', component: AccueilComponent },
   { path: 'daily-shop', component: dailyshopComponent },
   { path: 'Statistics', component: StatisticsComponent },
   { path: 'BattlePassRewards', component: BattlePassRewardsComponent },
   { path: 'map', component: MapComponent },
   { path: 'accueil', component: AccueilComponent },
   { path: 'about', component: AboutComponent },
   { path: 'weapons', component: WeaponsComponent },
   { path: 'fish', component: FishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
