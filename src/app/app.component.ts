import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import * as log from 'loglevel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {//put initialization logic
    this.testLog();
    // this.testLog2();
  }

  title = 'Tour of Heroes';  
  testLog(){
    var loghero:log=log.getLogger("HeroesComponent");
    loghero.setLevel(4);
    console.log(loghero.getLevel());
  } 
}
