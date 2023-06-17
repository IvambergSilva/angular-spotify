import { Injectable } from '@angular/core';
import { IMusic } from '../Interfaces/IMusic';
import { newSongs } from '../Common/factories';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentMusic = new BehaviorSubject<IMusic>(newSongs())
  timeId: any = null

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.getCurrentMusic()
  }

  async getCurrentMusic() {
    clearTimeout(this.timeId)
    const music = await this.spotifyService.getCurrentMusic()
    this.currentMusic.next(music)
    this.timeId = setInterval(async () => {
      await this.getCurrentMusic()
    }, 5000)
  }

  setCurrentMusic(music: IMusic){
    this.currentMusic.next(music)
  }
}
