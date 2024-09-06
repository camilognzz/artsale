import { Artist } from "@/app/domain/entities/Artist"

 

export interface IArtist {
    dataSource: Artist[];
}

export interface ArtistCardProps {
    artist: Artist;
    activeImage: any;
    clickNext: any;
    clickPrev: any;
}