import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListingComponent } from './movies/movie-listing/movie-listing.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieComponent } from './movies/movie/movie.component';
import { ShoppingListingComponent } from './shopping-listing/shopping-listing.component';
import { ShoppingEditComponent } from './shopping-listing/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, MoviesComponent, MovieListingComponent, MovieDetailsComponent, MovieComponent, ShoppingListingComponent, ShoppingEditComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
