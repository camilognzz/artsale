export class Artist{
    public id: number;
    public name: string;
    public description: string;
    public thumbnail?: string;

    constructor(
        id: number,
        name: string,
        description: string,
        thumbnail: string
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
