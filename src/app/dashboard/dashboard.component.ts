import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import * as log from 'loglevel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
    // this.testLog();
   }

  ngOnInit() {
    this.getHeroes();
    // this.testLog();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  testLog(){
    var heroes_log:log = log.getLogger("DashboardComponent");
    heroes_log.setLevel(3);
    heroes_log.info("Some log from heroes component");
  }
}
