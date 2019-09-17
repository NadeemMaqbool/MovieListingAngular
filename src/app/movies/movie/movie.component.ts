import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../movie.model'
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;
  @Input() index: number;
  
  constructor(private movieService: MovieService) { }
  
  ngOnInit() {
  }

  onSelected() {
     this.movieService.movieSelected.emit(this.movie);
  }

}
