export interface IPaint {
    id: number;
    title: string,
    description?: string,
    price: number,
    thumbnail?: string
}

export interface IEventProps {
    id?: number;
    date: string;
    title: string;
    description: string;
    thumbnail?: string;
}

export interface IArtistProps {
    id: number;
    name: string;
    description: string;
    thumbnail?: string;
}