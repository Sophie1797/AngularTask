import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `<p>The hero's birthday is {{birthday|date:"MM/dd/yy"}}</p>`,
  styleUrls: ['./hero-birthday.component.css']
})
// export class HeroBirthdayComponent implements OnInit {
 
//   constructor() { }

//   ngOnInit() {
//   }

// }
export class HeroBirthdayComponent {
  birthday = new Date(1998, 3, 15);
}
