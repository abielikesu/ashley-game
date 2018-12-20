import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { PlayComponent } from './play/play.component';
import { ScoreComponent } from './score/score.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SelectplayerComponent } from './selectplayer/selectplayer.component';
import {FormsModule} from '@angular/forms';
import {GameService} from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    PlayComponent,
    ScoreComponent,
    LeaderboardComponent,
    SelectplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
