import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { newArtist } from 'src/app/Common/factories';
import { IArtist } from 'src/app/Interfaces/IArtist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-favorite-artists-item',
  templateUrl: './favorite-artists-item.component.html',
  styleUrls: ['./favorite-artists-item.component.scss']
})
export class FavoriteArtistsItemComponent implements OnInit{

  id: string = ''
  name: string = ''
  imageUrl: string = ''

  topArtist: IArtist = newArtist()

  @Output()
  click = new EventEmitter<void>()

  constructor (
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.getTopArtists()
  }

  async getTopArtists() {
    const topArtists = await this.spotifyService.getTopArtistas(5)
    if(!!topArtists) {
      this.topArtist = topArtists.pop()
      this.id = this.topArtist.id
      this.name = this.topArtist.name
      this.imageUrl = this.topArtist.imageUrl
    }  
  }
}
