import { Component, OnInit } from '@angular/core';
import { MovieModel } from './movie.model';
import {MovieService} from './movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  selectedMovie: MovieModel;
  constructor(private movieService: MovieService) {  }

  ngOnInit() {
    this.movieService.movieSelected.
      subscribe(
        (movie:MovieModel) => {
        this.selectedMovie = movie;
      })
  }

}
