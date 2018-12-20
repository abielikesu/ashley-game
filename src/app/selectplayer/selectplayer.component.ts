import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {Player} from '../player';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-selectplayer',
  templateUrl: './selectplayer.component.html',
  styleUrls: ['./selectplayer.component.css']
})
export class SelectplayerComponent implements OnInit {

  playerNumber: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameService,
  ) {
  }

  ngOnInit() {
    this.playerNumber = this.route.snapshot.paramMap.get('playerNumber');
  }

  submitSelectedPlayer(value: Player) {
    this.gameService.selectPlayer(this.playerNumber, value);
    // Navigate to the new AppModel
    this.router.navigate(['/start'], {});
  }

}
