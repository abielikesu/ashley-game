import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {GameService} from '../game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  player1: Player;
  player2: Player;

  currentPlayer: Player;
  diceRoll = 0;

  constructor(
    private gameService: GameService,
  ) {
    this.player1 = this.gameService.player1 || {name: 'Ashley' } as Player;
    this.player2 = this.gameService.player2 || {name: 'Ashiana' } as Player;

    console.log('PlayComponent', this.player1, this.player2);
    this.player1.score = 0;
    this.player2.score = 0;
    this.currentPlayer = this.player1;
  }

  ngOnInit() {
  }

  rollDice() {
    this.diceRoll = 2;
    this.currentPlayer.score = this.currentPlayer.score + this.diceRoll;
    if (this.currentPlayer.name === this.player1.name) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }
}
