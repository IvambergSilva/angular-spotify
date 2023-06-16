import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment.development';
import Spotify from 'spotify-web-api-js'
import { IUser } from '../Interfaces/IUser'
import { SpotifyPlayListHandling, SpotifySongsHandling, SpotifyTopArtistHandling, SpotifyUserHandling } from '../Common/spotifyHelper';
import { IPlaylist } from '../Interfaces/IPlaylist';
import { Router } from '@angular/router';
import { IArtist } from '../Interfaces/IArtist';
import { IMusic } from '../Interfaces/IMusic';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;
  
  constructor(private router: Router) {
    this.spotifyApi = new Spotify()
  }

  async initializeUser() {
    if(!!this.user) return true;

    const token = localStorage.getItem('token')

    if(!token) return false

    try {
      this.setAccessToken(token)
      await this.getSpotifyUser()
      return !!this.user
    } catch(ex) {
      return false
    }
  }

  async getSpotifyUser() {
    const userInformation = await this.spotifyApi.getMe();
    this.user = SpotifyUserHandling(userInformation)
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
  }

  async getPlayList(offset=0, limit=0): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, { offset, limit: 50 })
    playlists.items
    console.log(playlists.items);
    return playlists.items.map(SpotifyPlayListHandling)
  }

  async getTopArtistas(limit=10): Promise<IArtist[]>{
    const artists = await this.spotifyApi.getMyTopArtists({ limit })
    console.log(artists);
    return artists.items.map(SpotifyTopArtistHandling)
  }

  async getSongs(offset = 0, limit=50): Promise<IMusic[]> {
    const songs = await this.spotifyApi.getMySavedTracks({ offset, limit })
    return songs.items.map(song => SpotifySongsHandling(song.track))
  }

  async playMusic(musicId: string) {
    await this.spotifyApi.queue(musicId)
    await this.spotifyApi.skipToNext()
  }
  
  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
