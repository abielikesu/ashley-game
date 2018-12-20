import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {GameService} from '../game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  player1: Player;
  player2: Player;

  constructor(
    private gameService: GameService,
  ) {
    this.player1 = this.gameService.player1;
    this.player2 = this.gameService.player2;

    console.log('StartComponent', this.player1, this.player2);
  }

  ngOnInit() {
  }

}
