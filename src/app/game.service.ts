import { Injectable } from '@angular/core';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players: any[];
  public player1: Player;
  public player2: Player;

  constructor() {
    this.players = [];
  }

  public selectPlayer(playerNumber: string, player: Player) {
    console.log('selectPlayer', playerNumber, player);
    this.players = [...this.players, player ];

    if (playerNumber === '1') {
      this.player1 = player;
    } else {
      this.player2 = player;
    }

  }
}
