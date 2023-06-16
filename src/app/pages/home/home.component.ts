import { Component, OnInit} from '@angular/core';
import { IMusic } from 'src/app/Interfaces/IMusic';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  songs: IMusic[] = []

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getSongs()
  }

  async getSongs() {
    const mySongs = await this.spotifyService.getSongs()
    console.log(mySongs);
    this.songs = mySongs
  }

  getArtist(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ')
  }

  async playMusic(music: IMusic) {
    console.log(music.id);
    
    await this.spotifyService.playMusic(music.id)
  }

}
