import { Component, OnInit } from '@angular/core';
import { Casts } from '../shared/casts.model';
import { ActorListingService } from './actor-listing.service';

@Component({
  selector: 'app-shopping-listing',
  templateUrl: './actor-listing.component.html',
  styleUrls: ['./actor-listing.component.css']
})
export class ActorListingComponent implements OnInit {

  casts: Casts[];
  constructor(private actorListingService: ActorListingService) { }

  ngOnInit() {
    this.casts = this.actorListingService.getCasts();
    this.actorListingService.castChanged.subscribe((cast: Casts[]) => {
      this.casts = cast;
    })
  }


}
