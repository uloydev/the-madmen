export enum DiscographyType {
    ALBUM = 'ALBUM',
    SINGLE = 'SINGLE',
    EP = 'EP',
}

export interface Track {
    title: string;
    duration: string;
    artist: string;
    performer: string;
    writer: string;
    producer: string;
    recorder: string;
    mixing: string;
    mastering: string;
}


export interface IDiscography {
    id: number;
    title: string;
    releaseYear: string;
    cover: string;
    type: DiscographyType;
    tracks: Track[];
}
