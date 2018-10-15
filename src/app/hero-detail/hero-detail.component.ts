import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/data/hero';
import { HeroService } from '../heroes/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  ngOnInit() {
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe();
  }
  constructor(private heroService: HeroService) { }
}
