export class Paint {
    public title: string;
    public description: string;
    public price: number;
    public thumbnail: string;
  
    constructor(
      title: string,
      description: string,
      price: number,
      thumbnail: string
    ) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
    }
  }
  