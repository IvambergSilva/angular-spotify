import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMusic } from 'src/app/Interfaces/IMusic';
import { newSongs } from 'src/app/Common/factories';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit, OnDestroy {

  musicList: IMusic[] = []

  currentMusic: IMusic = newSongs()

  playIcon = faPlay
  
  name: string = ''
  imageUrl: string = 'assets/images/white.png'

  title: string = ''

  subscribes: Subscription[] = []
  
  constructor(
    private activedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getMusic()
    this.getCurrentMusic()
  }

  ngOnDestroy(): void {
    this.subscribes.forEach(subs => subs.unsubscribe())
  }

  getMusic() {
    const subs = this.activedRoute.paramMap.subscribe(async params => {
      const type = params.get('type')
      const id = params.get('id')

      await this.getPageData(type, id)
    })

    this.subscribes.push(subs)
  }

  getCurrentMusic(){
    const subs = this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music
    })
    this.subscribes.push(subs)
  }
  
  getArtist(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ')
  }

  async getPageData(type: string, id: string) {
    if (type == 'playlist') this.getPlayListData(id)
    else this.getArtistsData(id)
  }

  async getPlayListData(id: string) {
    const playlistMusic = await this.spotifyService.getPlayListSongs(id)
    console.log(playlistMusic);

    this.musicList = playlistMusic.musics
    this.name = playlistMusic.name
    this.imageUrl = playlistMusic.imageUrl

    this.title = `Músicas da PLAY LIST: ${playlistMusic.name}`
  }

  async playMusic(music: IMusic) {
    await this.spotifyService.playMusic(music.id)
    this.playerService.setCurrentMusic(music)
  }

  async getArtistsData(id: string) {

  }

}
