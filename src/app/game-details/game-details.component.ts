import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import {Game} from '../game'

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  @Input() game:Game;
  @Output() isComplete= new EventEmitter<boolean>();
  gameDelete(complete:boolean){
     this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
