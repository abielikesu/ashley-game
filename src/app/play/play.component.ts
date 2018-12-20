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

  gameFinished: boolean;
  currentPlayer: Player;
  numDice: number;
  dice1Roll = 0;
  dice2Roll = 0;
  turn = 0;

  constructor(
    private gameService: GameService,
  ) {
    this.player1 = this.gameService.player1 || {name: 'Ashley' } as Player;
    this.player2 = this.gameService.player2 || {name: 'Ashiana' } as Player;

    console.log('PlayComponent', this.player1, this.player2);
    this.startGame();
  }


  startGame() {
    this.player1.score = 0;
    this.player2.score = 0;
    this.currentPlayer = this.player1;
    this.gameFinished = false;
    this.numDice = 2;
    this.turn = 1;
  }

  ngOnInit() {
  }

  rollDice() {
    this.dice1Roll = Math.floor(Math.random() * 6) + 1 ;
    this.dice2Roll = 0;

    if (this.numDice === 2) {
      this.dice2Roll = Math.floor(Math.random() * 6) + 1 ;

      const totalScore = this.dice1Roll + this.dice2Roll;
      if (!this.isOdd(totalScore)) {
        this.currentPlayer.score = this.currentPlayer.score + totalScore + 10;
      } else {
        this.currentPlayer.score = this.currentPlayer.score + totalScore - 5;
        if (this.currentPlayer.score < 0) {
          this.currentPlayer.score = 0;
        }
      }
      // Roll a double
      if (this.dice1Roll === this.dice2Roll) {
        this.numDice = 1;
        return;
      }
    } else {
      this.currentPlayer.score = this.currentPlayer.score + this.dice1Roll;
      this.numDice = 2;
    }

    if (this.currentPlayer.name === this.player2.name && this.turn >= 5) {
      // Determine if there is a winner
      if (this.player1.score !== this.player2.score) {
        this.gameFinished = true;

        if (this.player1.score > this.player2.score) {
          this.currentPlayer = this.player1;
        }
        this.gameService.updateLeaderBoard(this.currentPlayer);
        return;
      } else {
        this.numDice = 1;
        return;
      }
    }

    if (this.currentPlayer.name === this.player1.name) {
      this.currentPlayer = this.player2;
    } else {
      this.turn = this.turn + 1;
      this.currentPlayer = this.player1;
    }
  }

  isOdd(num) {
    return num % 2;
  }
}
