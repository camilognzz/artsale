export class Event{
    public id: number;
    public date: string;
    public title: string;
    public description: string;
    public thumbnail: string;

    constructor(
        id: number,
        date: string,
        title: string,
        description: string,
        thumbnail: string
    ){
        this.id = id;
        this.date = date;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
