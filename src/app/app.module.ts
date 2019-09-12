import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListingComponent } from './movies/movie-listing/movie-listing.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieComponent } from './movies/movie/movie.component';
import { ActorListingComponent } from './actors-listing/actor-listing.component';
import { ActorEditComponent } from './actors-listing/actor-edit/actor-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
 
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, MoviesComponent, MovieListingComponent, MovieDetailsComponent,
    MovieComponent, ActorListingComponent, ActorEditComponent, DropdownDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
