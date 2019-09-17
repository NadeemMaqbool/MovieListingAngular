import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { MovieModel } from '../movie.model';
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieModel;
  id: number;
  constructor(  private movieService: MovieService,
                private route: ActivatedRoute,
                private router: Router) {
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movie = this.movieService.getRecipe(this.id)
      }
    );
  }

  onEditMovie() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
