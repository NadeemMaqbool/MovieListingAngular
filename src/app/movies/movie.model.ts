export class MovieModel {
    public title: string;
    public year: string;
    public rating: string;
    public description: string;
    public imagePath: string;
    public directorName: string;
    public cast: string;
    
    
    constructor(title: string, year: string, rating: string, description: string, imagePath: string, directorName: string, cast: string ) {
        
        this.directorName = directorName;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.description = description;
        this.imagePath = imagePath
        this.directorName = directorName;
        this.cast = cast;
    }
}