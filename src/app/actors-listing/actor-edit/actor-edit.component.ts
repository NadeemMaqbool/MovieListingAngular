import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Casts } from "../../shared/casts.model";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef
  @Output() actorAdded = new EventEmitter<Casts>()
  
  constructor() { }

  ngOnInit() {
  }


  onAddActor() {
    const name = this.nameInputRef.nativeElement.value;
    const noOfmovies = this.amountInputRef.nativeElement.value;

    const newActor = new Casts(name, noOfmovies);

    this.actorAdded.emit(newActor);
  }

}
