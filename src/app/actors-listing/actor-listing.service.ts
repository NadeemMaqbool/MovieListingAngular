import { Casts } from '../shared/casts.model'
import { EventEmitter } from '@angular/core';

export class ActorListingService {
    castChanged = new EventEmitter<Casts[]>();
    private casts: Casts[] = [
        new Casts('Heath Ledger',2),
        new Casts('Johny depp',1)
      ];

    getCasts() {
        return this.casts.slice();
    }  

    addCast(cast: Casts) {
        this.casts.push(cast)
        this.castChanged.emit(this.casts.slice());
    }
}