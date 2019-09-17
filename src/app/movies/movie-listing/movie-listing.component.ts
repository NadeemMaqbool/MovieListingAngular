import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MovieModel } from '../movie.model'; 
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css'],
})
export class MovieListingComponent implements OnInit {
  
  movies: MovieModel[];
  
  constructor( private movieService: MovieService, 
          private route:ActivatedRoute
          , private router: Router ) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  onAddMovie(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
