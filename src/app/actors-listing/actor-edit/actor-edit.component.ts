import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Casts } from "../../shared/casts.model";
import { ActorListingService } from '../actor-listing.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef
  
  constructor(private actorListingService: ActorListingService) { }

  ngOnInit() {
  }


  onAddActor() {
    const name = this.nameInputRef.nativeElement.value;
    const noOfmovies = this.amountInputRef.nativeElement.value;

    const newActor = new Casts(name, noOfmovies);
    this.actorListingService.addCast(newActor);
  }

}
