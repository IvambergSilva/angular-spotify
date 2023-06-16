import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";

export function newArtist(): IArtist {
    return {
        id: '',
        name: 'Nattan',
        imageUrl: ''
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