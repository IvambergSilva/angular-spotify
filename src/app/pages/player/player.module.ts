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
import { FavoriteArtistsComponent } from 'src/app/components/favorite-artists/favorite-artists.component';
import { FavoriteArtistsItemComponent } from 'src/app/components/favorite-artists-item/favorite-artists-item.component';
import { MusicListComponent } from '../music-list/music-list.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';

@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    MenuButtonComponent,
    HomeComponent,
    PlayerCardComponent,
    TopArtistaComponent,
    RightPanelComponent,
    FavoriteArtistsComponent,
    FavoriteArtistsItemComponent,
    PlayerCardComponent,
    MusicListComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
