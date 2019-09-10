export class MovieModel {
    public tile: string;
    public year: Date;
    public rating: string;
    public description: string;
    public imagePath: string;
    public casts: string;
    public directorName: string;

    constructor(tile: string, year: Date, rating: string, description: string, imagePath: string, casts: string, directorName: string ) {
        
        this.directorName = directorName;
        this.tile = tile;
        this.year = year;
        this.rating = rating;
        this.description = description;
        this.imagePath = imagePath
        this.casts = casts;
        this.directorName = directorName;
    }
}