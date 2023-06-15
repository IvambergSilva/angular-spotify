import { IArtist } from "../Interfaces/IArtist";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUser } from "../Interfaces/IUser";

export function SpotifyUserHandling(user: SpotifyApi.CurrentUsersProfileResponse): IUser{
    return {
        id: user.id,
        name: user.display_name,
        imageUrl: user.images.pop().url
    }
}

export function SpotifyPlayListHandling(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images.pop().url
    }
}

export function SpotifyTopArtistHandling(topArtists: SpotifyApi.ArtistObjectFull): IArtist {
    return {
        id: topArtists.id,
        name: topArtists.name,
        imageUrl: topArtists.images.sort((a,b) => a.width - b.width).pop().url
    }
}