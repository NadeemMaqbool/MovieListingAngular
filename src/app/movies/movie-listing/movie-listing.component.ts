import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieModel } from '../movie.model'; 

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {
  @Output() movieGetSelected: EventEmitter<MovieModel> = new EventEmitter();
  
  movies: MovieModel[] = [
    new MovieModel ('Zootopia', '2015', '5', 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Massa vitae tortor condimentum lacinia.", 
    'http://images6.fanpop.com/image/photos/40000000/Zootopia-Movie-Poster-movie-trailers-40045645-671-404.jpg',
    'Mr Perfectionist',
    "Ashton turner, John doe, Mr sneaky peaky"
    ),
    new MovieModel ('Lion King', '2019', '4.5', 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Massa vitae tortor condimentum lacinia.", 
    'https://d1rqbllqfn2w5y.cloudfront.net/images/blog/2018-2019_articles/18-07_July/blog_18_07_24_lionking_880x450.jpg',
    'Mr Director',
    "Adams liam, John shawn"
    ),
    new MovieModel ('How to train your dragon', '2019', '4.1', 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Massa vitae tortor condimentum lacinia.", 
    'https://media.comicbook.com/2019/05/hot-to-train-your-dragon-the-hidden-world-blu-ray-top-1171765.jpeg',
    'Dream Adventures',
    'Michael Lee, Annie Lawrence, Vita Onucha'
    )
  ]; 
  
  constructor() { }

  ngOnInit() {
  }

  onMovieSelected(movie: MovieModel) {
     this.movieGetSelected.emit(movie)
  }

}
