import { Component, EventEmitter, Output } from '@angular/core';
import { newArtist } from 'src/app/Common/factories';
import { IArtist } from 'src/app/Interfaces/IArtist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-favorite-artists',
  templateUrl: './favorite-artists.component.html',
  styleUrls: ['./favorite-artists.component.scss']
})
export class FavoriteArtistsComponent {

  topArtist: IArtist[] = []

  id: string = ''
  name: string = ''
  imageUrl: string = ''

  constructor (
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.getTopArtists()
  }

  async getTopArtists() {
    const topArtists = await this.spotifyService.getTopArtistas(5)
    
    if(!!topArtists) {
      this.topArtist = topArtists
      console.log(this.topArtist);
      
      // this.id = this.topArtist.id
      // this.name = this.topArtist.name
      // this.imageUrl = this.topArtist.imageUrl
    }
  }

}
