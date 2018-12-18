import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component';
import {PlayComponent} from './play/play.component';
import {ScoreComponent} from './score/score.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {SelectplayerComponent} from './selectplayer/selectplayer.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'play', component: PlayComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'selectplayer', component: SelectplayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
