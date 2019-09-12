import { Component, OnInit } from '@angular/core';
import { Casts } from '../shared/casts.model'
@Component({
  selector: 'app-shopping-listing',
  templateUrl: './actor-listing.component.html',
  styleUrls: ['./actor-listing.component.css']
})
export class ActorListingComponent implements OnInit {

  casts: Casts[] = [
    new Casts('Heath Ledger',2),
    new Casts('Johny depp',1)
  ];
  constructor() { }

  ngOnInit() {
  }

  onActorAdded(actor: Casts) {
    this.casts.push(actor);
  }

}
