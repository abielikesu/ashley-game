import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {Player} from '../player';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaderBoard: Player[];

  constructor(
    private gameService: GameService,
  ) {
    this.leaderBoard = this.gameService.leaderBoard;
  }

  ngOnInit() {
  }

}
