import { Component, Input } from '@angular/core';
import { newArtist } from 'src/app/Common/factories';
import { IArtist } from 'src/app/Interfaces/IArtist';

@Component({
  selector: 'app-favorite-artists-item',
  templateUrl: './favorite-artists-item.component.html',
  styleUrls: ['./favorite-artists-item.component.scss']
})

export class FavoriteArtistsItemComponent {
  id: string = ''
  @Input()
  name: string = ''
  @Input()
  imageUrl: string = ''
}
