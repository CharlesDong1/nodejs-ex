import { Component, OnInit } from '@angular/core';
import { Hero } from './data/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: String): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(
      hero => this.heroes.push(hero)
    );
  };

  delete(hero: Hero): void{
    this.heroService.deleteHero(hero.id).subscribe();
    this.heroes = this.heroes.filter(h => h !== hero);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
}
