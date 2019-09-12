import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from '../movie.model'
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() movieSelected : EventEmitter<void> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }

  onSelected() {
    this.movieSelected.emit();
  }

}
