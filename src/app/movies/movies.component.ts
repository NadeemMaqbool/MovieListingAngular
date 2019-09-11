import { Component, OnInit } from '@angular/core';
import { MovieModel } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie: MovieModel;
  constructor() { }

  ngOnInit() {
  }

}
