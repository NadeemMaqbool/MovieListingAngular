import { EventEmitter } from "@angular/core";

import { MovieModel } from "./movie.model";
import { Casts } from "../shared/casts.model";

export class MovieService {
    movieSelected = new EventEmitter<MovieModel>();
    
    private movies: MovieModel[] = [
        new MovieModel ('Zootopia',["Comic", "Comdey", "Thriller"], '2015', '5', 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Massa vitae tortor condimentum lacinia.", 
        'http://images6.fanpop.com/image/photos/40000000/Zootopia-Movie-Poster-movie-trailers-40045645-671-404.jpg',
        'Mr Perfectionist',
        [   
            new Casts(
                "Murphy Lee", 20
            ),
            new Casts(
                "Malita Been", 5
            ),
            new Casts(
                "Arnold", 8
            )
        ]   
        ),
        new MovieModel ('Lion King', ["Comedy", "Adventure", "Thriller"], '2019', '4.5', 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Massa vitae tortor condimentum lacinia.", 
        'https://d1rqbllqfn2w5y.cloudfront.net/images/blog/2018-2019_articles/18-07_July/blog_18_07_24_lionking_880x450.jpg',
        'Mr Director',
        [   
            new Casts(
                "Adam Sandler", 20
            ),
            new Casts(
                "Brad John", 15
            ),
            new Casts(
                "Angelina", 12
            )
        ]
        ),
        new MovieModel ('How to train your dragon', ["Adventure", "Thriller", "Scifi"],  '2019', '4.1', 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Massa vitae tortor condimentum lacinia.", 
        'https://media.comicbook.com/2019/05/hot-to-train-your-dragon-the-hidden-world-blu-ray-top-1171765.jpeg',
        'Dream Adventures',
        [   
            new Casts(
                "Francis", 12
            ),
            new Casts(
                "Shawn Mendes", 9
            ),
            new Casts(
                "Abraham", 4
            )
        ]
        )
    ];
    
    getMovies() {
        return this.movies.slice();
    }

    getRecipe(id: number) {
        return this.movies[id]
    }
}