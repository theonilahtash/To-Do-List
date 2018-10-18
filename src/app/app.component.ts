import { Component } from '@angular/core';
import {Game} from './game'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  games = [
      new Game(1,'Rugby','Played by 11 or 7 players between 2 sides',new Date(2018,12,6)),
      new Game(2,'Soccer','Played by 11  players between 2 sides',new Date(2018,11,3)),
      new Game(3, 'Hockey','Played by 6 players between 2 sides',new Date(2018,12,26)),
      new Game(4, 'Volleyball','Played by 6 players between 2 sides',new Date(2018,11,10)),
      new Game(5, 'Basketball','Played by 5 players between 2 sides',new Date(2018,10,26)),
  ]


  // constructor(){
  //
  //   this.games = ["Rugby","Soccer","Hockey","Volleyball","Basketball"];
  // }
}
