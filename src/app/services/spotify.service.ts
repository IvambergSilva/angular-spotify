import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment.development';
import Spotify from 'spotify-web-api-js'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
 
  constructor() {
    this.spotifyApi = new Spotify()
  }

  getUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`

    return authEndpoint + clientId + redirectUrl + scopes + responseType
  }

  getTokenUrlCallBack() {
    if(!window.location.hash){
      return ''
    }

    const params = window.location.hash.substring(1).split('&')[0].split('=')[1]
    
    return params
  }

  setAccessToken(token: string){
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
    this.spotifyApi.skipToNext()
  }

}