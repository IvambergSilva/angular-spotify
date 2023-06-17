import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { faBackward, faForward, faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newSongs } from 'src/app/Common/factories';
import { IMusic } from 'src/app/Interfaces/IMusic';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  id: string
  name: string
  imageUrl: string

  play_pause = faPause
  backwardIcon = faStepBackward
  forwardIcon = faStepForward
  
  btnPlay_Pause: boolean = true

  currentMusic: IMusic = newSongs()

  subscribes: Subscription[] = []

  constructor(
    private playerService: PlayerService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.getCurrentPlaying()
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(subs => subs.unsubscribe())
  }

  getCurrentPlaying() {
    const subs =  this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music

      this.imageUrl = this.currentMusic.album.imageUrl
      this.name = this.currentMusic.title
      this.id = this.currentMusic.id
    })

    this.subscribes.push(subs)
  }

  skipMusic() {
    this.spotifyService.skipMusic()
  }

  returnMusic() {
    this.spotifyService.returnMusic()
  }

  statusMusic() {
    if(this.btnPlay_Pause){
      this.spotifyService.pauseMusic()
      this.play_pause = faPlay
    } else {
      this.spotifyService.playMusicCard()
      this.play_pause = faPause
    }
    this.btnPlay_Pause = !this.btnPlay_Pause
  }
}
