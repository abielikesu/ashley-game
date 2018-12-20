import { Injectable } from '@angular/core';
import {Player} from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players: Player[];
  leaderBoard: Player[];
  public player1: Player;
  public player2: Player;

  constructor() {
    this.loadData();
  }

  public selectPlayer(playerNumber: string, player: Player): boolean {
    console.log('selectPlayer', playerNumber, player);

    const aPlayerArray: Player[] = this.players.filter((p: Player) => {
      return p.name === player.name;
    });

    console.log('aPlayerArray', aPlayerArray);

    if (!aPlayerArray.length) {
      this.players = [...this.players, player ];
      console.log('player registered');
    } else {
      const aPlayer = aPlayerArray[0];
      console.log('aPlayer', aPlayer);
      if (aPlayer.password !== player.password) {
        console.log('wrong password', aPlayer.password, player.password);
        return false;
      }
      console.log('player authenticated');
    }

    if (playerNumber === '1') {
      this.player1 = player;
    } else {
      this.player2 = player;
    }

    this.saveData();
    return true;
  }

  public updateLeaderBoard(player: Player) {
    this.leaderBoard = [...this.leaderBoard, Object.assign({}, player) ];
    this.leaderBoard = this.leaderBoard.sort((a, b) => b.score - a.score);
    this.leaderBoard = this.leaderBoard.slice(0, 5);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('ashley-game', JSON.stringify({players: this.players, leaderBoard: this.leaderBoard}));
  }

  loadData() {
    const storedData: any = localStorage.getItem('ashley-game');
    console.log('loadData', storedData);
    if (storedData) {
      const data = JSON.parse(storedData);
      this.leaderBoard = data['leaderBoard'];
      this.players = data['players'];
    } else {
      this.leaderBoard = [];
      this.players = [];
    }
    console.log('loadData done', this.leaderBoard, this.players);
  }
}
