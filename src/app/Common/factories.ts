import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";
import { IPlaylist } from "../Interfaces/IPlaylist";

export function newArtist(): IArtist {
    return {
        id: '',
        name: '',
        imageUrl: '',
        musics: []
    }
}

export function newSongs(): IMusic {
    return {
        id: '',
        title: '',
        album: {
            id: '',
            name: '',
            imageUrl: ''
        },
        artists: [],
        time: ''
    }
}

export function newPlayList(): IPlaylist {
    return {
        id: '',
        name: '',
        imageUrl: '',
        musics: [],
    }
}