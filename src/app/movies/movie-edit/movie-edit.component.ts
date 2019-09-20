import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from "../movie.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  id: number
  editMode: boolean = false
  recipeForm: FormGroup;
  
  constructor( private route: ActivatedRoute, 
              private movieService: MovieService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null
        this.initForm();
      }
    )
  }

  private initForm() {
      let actorName = '';
      let imageUrl = '';
      let description = '';
      
      if(this.editMode) {
        const movie = this.movieService.getRecipe(this.id); 
        
        actorName = movie.title;
        imageUrl = movie.imagePath;
        description = movie.description;
      }

      this.recipeForm = new FormGroup({
        'name': new FormControl(actorName),
        'imagePath': new FormControl(imageUrl),
        'desription': new FormControl(description)
      })
  }

}
