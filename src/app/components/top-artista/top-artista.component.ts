import { Component, OnInit } from '@angular/core';
import { newArtist } from 'src/app/Common/factories';
import { IArtist } from 'src/app/Interfaces/IArtist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artista',
  templateUrl: './top-artista.component.html',
  styleUrls: ['./top-artista.component.scss']
})
export class TopArtistaComponent implements OnInit{

  artist: IArtist = newArtist()

  constructor(
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.getTopArtists()
  }

  async getTopArtists() {
    const topArtists = await this.spotifyService.getTopArtistas(1)

    console.log(topArtists);
    
    if(!!topArtists) topArtists.pop()
  }
}
