import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoviesComponent } from "./movies/movies.component";
import { ActorListingComponent } from "./actors-listing/actor-listing.component";
import { MovieStartComponent } from "./movies/movie-start/movie-start.component";
import { MovieDetailsComponent } from "./movies/movie-details/movie-details.component";
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch:'full' },
    {path: 'shopping-list', component: ActorListingComponent },
    {path: 'movies', component: MoviesComponent, children: [
        {path:'', component: MovieStartComponent },
        {path:'new', component: MovieEditComponent},
        {path:':id', component: MovieDetailsComponent},
        {path:':id/edit', component: MovieEditComponent},
    ]}
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class AppRoutingComponent {

}