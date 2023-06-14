import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticatedGuard implements CanLoad {
  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const token = localStorage.getItem('token')

    if(!token) {
      return this.unauthenticated()
    }   

    return new Promise(async (res) => {
      const userCriated = await this.spotifyService.initializeUser()

      if(userCriated) {
        res(true)
      } else {
        res(this.unauthenticated())
      }
    })
    return true
  }

  unauthenticated() {
    localStorage.clear()
    this.router.navigate(['/login'])
    return false
  }
}