import { IArtist } from "../Interfaces/IArtist";

export function newArtist(): IArtist {
    return {
        id: '',
        name: '',
        imageUrl: ''
    }
}