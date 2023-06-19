import { Component, OnDestroy, OnInit} from '@angular/core';
import { IMusic } from 'src/app/Interfaces/IMusic';
import { SpotifyService } from 'src/app/services/spotify.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { PlayerService } from 'src/app/services/player.service';
import { newSongs } from 'src/app/Common/factories';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  songs: IMusic[] = []
  currentMusic: IMusic = newSongs()

  subscribes: Subscription[] = []
  
  playIcon = faPlay

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}
  
  ngOnInit(): void {
    this.getSongs()
    this.getCurrentMusic() 
  }
  
  ngOnDestroy(): void {
    this.subscribes.forEach(subs => subs.unsubscribe())
  }

  async getSongs() {
    const mySongs = await this.spotifyService.getSongs()
    this.songs = mySongs
  }

  getArtist(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ')
  }

  async playMusic(music: IMusic) {
    await this.spotifyService.playMusic(music.id)
    this.playerService.setCurrentMusic(music)
  }

  getCurrentMusic() {
    const subs =  this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music
    })
    this.subscribes.push(subs)
  }
}
