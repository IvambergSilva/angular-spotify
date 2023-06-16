import { Component, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-liked-song',
  templateUrl: './liked-song.component.html',
  styleUrls: ['./liked-song.component.scss']
})
export class LikedSongComponent {

  playIcon = faPlay
  
  @Input()
  title: string = 'Arranhão'
  @Input()
  artist: string = 'Henrique e Juliano'
  @Input()
  time: string = '03:12'
  @Input()
  album: string = 'Arranhão Ao Vivo'
  

}
