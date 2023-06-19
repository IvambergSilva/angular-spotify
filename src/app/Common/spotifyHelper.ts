import { addMilliseconds, format } from "date-fns";
import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUser } from "../Interfaces/IUser";
import { newPlayList, newSongs } from "./factories";

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

export function SpotifyPlayListSongsHandling(playlist: SpotifyApi.SinglePlaylistResponse): IPlaylist{
    if(!playlist) return newPlayList()

    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images.sort((a,b) => a.width - b.width).pop().url,
        musics: []
    }
}

export function SpotifyTopArtistHandling(topArtists: SpotifyApi.ArtistObjectFull): IArtist {
    return {
        id: topArtists.id,
        name: topArtists.name,
        imageUrl: topArtists.images.sort((a,b) => a.width - b.width).pop().url
    }
}

export function SpotifySongsHandling(songs: SpotifyApi.TrackObjectFull): IMusic {

    if(!songs) return newSongs()
    
    const msToMin = (ms: number) => {
        const data = addMilliseconds(new Date(0), ms);
        return format(data, 'mm:ss')
    }
    
    return {
        id: songs.uri,
        title: songs.name,
        album: {
            id: songs.id,
            name: songs.album.name,
            imageUrl: songs.album.images.sort((a,b) => a.width - b.width).pop().url
        },
        artists: songs.artists.map(artists => ({
            id: artists.id,
            name: artists.name
        })),
        time: msToMin(songs.duration_ms)
    }
}