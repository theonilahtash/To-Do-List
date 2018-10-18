import { Component, OnInit } from '@angular/core';
import {Game} from '../game'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games = [
      new Game(1,'Rugby','Played by 11 or 7 players between 2 sides',new Date(2018,12,6)),
      new Game(2,'Soccer','Played by 11  players between 2 sides',new Date(2018,11,3)),
      new Game(3, 'Hockey','Played by 6 players between 2 sides',new Date(2018,12,26)),
      new Game(4, 'Volleyball','Played by 6 players between 2 sides',new Date(2018,11,10)),
      new Game(5, 'Basketball','Played by 5 players between 2 sides',new Date(2018,10,26)),
  ]


  toogleDetails(index){
     this.games[index].showDescription = !this.games[index].showDescription;
  }

  deleteGame(isComplete,index){
       if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete ${this.games[index].name}`)

           if(toDelete){
               this.games.splice(index,1)
           }
       }
   }

   addNewGame(game){
     let gamelength = this.games.length;
     game.id=gamelength+1;
     game.completeDate = new Date(game.completeDate)
     this.games.push(game)
   }

  constructor() { }

  ngOnInit() {
  }

}
