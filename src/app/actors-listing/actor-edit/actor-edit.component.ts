import { Component, OnInit } from '@angular/core';
import { Casts } from "../../shared/casts.model";
import { ActorListingService } from '../actor-listing.service';
import { NgForm } from '@angular/forms';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  subscription: Subscription;
  editMode = false;
  editItemIndex:number;

  constructor(private actorListingService: ActorListingService) { }

  ngOnInit() {
    this.subscription = this.actorListingService.statedEditing.
      subscribe(
        (index:number) => {
          this.editItemIndex = index;
           this.editMode = true;
    });
  }


  onAddActor(form:NgForm) {
    
    const newActor = new Casts(form.value.name, form.value.amount);
    this.actorListingService.addCast(newActor);
  }

}
