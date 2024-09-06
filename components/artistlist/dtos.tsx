import { Artist } from "@/app/domain/entities/Artist"
import { MouseEventHandler } from "react";

 

export interface IArtist {
    dataSource: Artist[];
}

export interface ArtistCardProps {
    artist: Artist;
}

export interface IListArtistProps {
    autoPlay?: boolean;
}