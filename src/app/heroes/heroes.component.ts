import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import{HEROES} from '../mock-heroes';
import * as log from 'loglevel';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {//export the component class so you  can import it elsewhere like in the AppModeule
  heroes: Hero[];
  heroToAdd: Hero;
  heroToUpdate: Hero;
  constructor(private heroService: HeroService,private location: Location) { }

  ngOnInit() {//put initialization logic
    this.heroToAdd = new Hero();
    this.heroToUpdate = new Hero();
    this.getHeroes();
    this.testLog();
    // this.testLog2();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  addHero() {
    this.heroService.addHero(this.heroToAdd as Hero)//?
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    console.log(this.heroToAdd);
  }
  goBack(): void {
    this.location.back();
  }
  OnClickUpdateHero(hero:Hero){
    this.heroToUpdate=hero;
  }
  
  testLog(){
    var heroes_log:log = log.getLogger("HeroesComponent");
    // heroes_log.setLevel(3);
    console.log(heroes_log.getLevel());
    heroes_log.info("Some log from heroes component");
  }

  updateHero(){
    this.heroService.updateHero(this.heroToUpdate);
    
  }
  add(id:number, name: string, gender:string, age:number, description:string): void {
    name = name.trim();
    gender= gender.trim();
    description= description.trim();
    if (!name&&!id&&!gender&&!age&&!description) { return; }
    this.heroService.addHero({ id,name,gender,age,description } as Hero)//?
      .subscribe(hero => {
        this.heroes.push(hero);
      });

  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);//leave legal heroes
    this.heroService.deleteHero(hero).subscribe();
  }

  onSelect(hero: Hero): void{
    hero.onselected=!hero.onselected;
    console.log(hero.onselected);
  }

}
