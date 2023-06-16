import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPanelComponent } from 'src/app/components/left-panel/left-panel.component';
import { MenuButtonComponent } from 'src/app/components/menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from '../home/home.component';
import { PlayerCardComponent } from 'src/app/components/player-card/player-card.component';
import { TopArtistaComponent } from 'src/app/components/top-artista/top-artista.component';
import { RightPanelComponent } from 'src/app/components/right-panel/right-panel.component';
import { LikedSongComponent } from 'src/app/components/liked-song/liked-song.component';

@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    MenuButtonComponent,
    HomeComponent,
    PlayerCardComponent,
    TopArtistaComponent,
    RightPanelComponent,
    LikedSongComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
