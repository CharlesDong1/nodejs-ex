import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }  from '../heroes/heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import { DashboardComponent }   from '../dashboard/dashboard.component';
import {NewHeroComponent} from "../new-hero/new-hero.component";
import {D3DemoComponent} from "../d3-demo/d3-demo.component";
import {MessageComponent} from "../message/message.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'new_hero', component: NewHeroComponent},
  { path: 'd3_demo', component: D3DemoComponent},
  { path: 'message', component: MessageComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule],
  declarations: []
})
export class AppRouterModule {

}
