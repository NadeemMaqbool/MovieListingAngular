import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('form', {static: false}) actorListingForm: NgForm;
  
  subscription: Subscription;
  editMode = false;
  editItemIndex:number;
  editedItem: Casts;

  constructor(private actorListingService: ActorListingService) { }

  ngOnInit() {
    this.subscription = this.actorListingService.statedEditing.
      subscribe(
        (index:number) => {
          this.editItemIndex = index;
           this.editMode = true;
           this.editedItem = this.actorListingService.getCast(index);
           this.actorListingForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.noOfmovies
           })
    });
  }


  onAddActor(form:NgForm) {
    
    const newActor = new Casts(form.value.name, form.value.amount);
    if(this.editMode) {
      this.actorListingService.updateCast(this.editItemIndex, newActor)
    }else{
      this.actorListingService.addCast(newActor);
    }
    this.onClearForm();
    
  }
  onClearForm() {
    this.editMode = false;
    this.actorListingForm.reset();
    
  }

  onDeleteActor(index: number, form: NgForm) {
    this.actorListingService.deleteCast(this.editItemIndex);
    this.onClearForm();
  }


}
