import { Casts } from '../shared/casts.model';

export class MovieModel {
    public title: string;
    public genre: string[];
    public year: string;
    public rating: string;
    public description: string;
    public imagePath: string;
    public directorName: string;
    public casts: Casts[];
    
    
    constructor(title: string, genre: string[], year: string, rating: string, description: string, imagePath: string, directorName: string, casts: Casts[] ) {
        
        this.directorName = directorName;
        this.genre = genre;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.description = description;
        this.imagePath = imagePath
        this.directorName = directorName;
        this.casts = casts;
    }
}