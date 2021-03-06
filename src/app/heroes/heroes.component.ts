import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // selectedHero: Hero;

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   // console.log(hero);
  // }

  getHeros(): void {
    // this.heroes = this.heroService.getHeros();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

}
