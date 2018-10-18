import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {HeroService} from "../heroes/services/hero.service";
import {Hero} from "../heroes/data/hero";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private location: Location,
              private heroService: HeroService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back()
  }

  add(name: String): void {
    name = name.trim();
    if(!name) {
      alert('Name of hero could not be empty')
      return;
    }
    this.heroService.addHero({name} as Hero).subscribe(
      // this.router.navigateByUrl('heroes')
    );
  };
}
