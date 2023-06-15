import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faSearch, faGuitar, faMusic, faSignOut, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { IUser } from 'src/app/Interfaces/IUser';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})

export class LeftPanelComponent implements OnInit {
  
  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic;
  signOutIcon = faSignOutAlt
  
  menuSelected: string = 'Home'

  playlists: IPlaylist[] = []

  userInfo: IUser
  userInfoName: string = ''
  userInfoImageUrl: string = ''

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPlayList()
    this.getUserInfo()
  }

  clickSelect(button: string) {
    this.menuSelected = button
    this.router.navigateByUrl('player/home')
  }

  async getPlayList() {
    this.playlists = await this.spotifyService.getPlayList()
  }

  getUserInfo()  {
    this.userInfo = this.spotifyService.user
    this.userInfoName = this.userInfo.name
    this.userInfoImageUrl = this.userInfo.imageUrl
  }

  logout() {
    this.spotifyService.logout()
  }
}
