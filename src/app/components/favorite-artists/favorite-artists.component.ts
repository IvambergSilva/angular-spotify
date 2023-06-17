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
  name: string = ''
  imageUrl: string = ''

  @Output()
  click = new EventEmitter<void>()

  // constructor (
  //   private spotifyService: SpotifyService
  // ) { }

  // ngOnInit(): void {
  //   this.getTopArtists()
  // }

  // async getTopArtists() {
  //   const topArtists = await this.spotifyService.getTopArtistas(3)
  //   // if(!!topArtists) this.topArtist = topArtists.pop()
  //   console.log(this.topArtist);
  // }

}
