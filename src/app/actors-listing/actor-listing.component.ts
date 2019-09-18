import { Component, OnInit, OnDestroy } from '@angular/core';
import { Casts } from '../shared/casts.model';
import { ActorListingService } from './actor-listing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-listing',
  templateUrl: './actor-listing.component.html',
  styleUrls: ['./actor-listing.component.css']
})
export class ActorListingComponent implements OnInit, OnDestroy {

  casts: Casts[];
  isCastsChanged: Subscription;
  constructor(private actorListingService: ActorListingService) { }

  ngOnInit() {
    this.casts = this.actorListingService.getCasts();
    this.isCastsChanged = this.actorListingService.castChanged.subscribe((cast: Casts[]) => {
      this.casts = cast;
    })
  }

  onEditItem(index:number) {
    this.actorListingService.statedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.isCastsChanged.unsubscribe();
  }


}
