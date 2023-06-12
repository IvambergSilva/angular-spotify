import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.checkToken()
  }

  checkToken() {
    const token = this.spotifyService.getTokenUrlCallBack()

    if(!!token) {
      this.spotifyService.setAccessToken(token)
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getUrlLogin()
  }
}
