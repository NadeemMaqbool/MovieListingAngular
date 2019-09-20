import { Subject } from "rxjs/Subject";
import { Casts } from '../shared/casts.model'

export class ActorListingService {
    
    castChanged = new Subject<Casts[]>();
    statedEditing = new Subject<number>();
    
    private casts: Casts[] = [
        new Casts('Heath Ledger',2),
        new Casts('Johny depp',6)
      ];

    getCast(index: number) {
        return this.casts[index];
    }  
    
    getCasts() {
        return this.casts.slice();
    }  

    addCast(cast: Casts) {
        this.casts.push(cast)
        this.castChanged.next(this.casts.slice());
    }

    updateCast(index: number, newCast: Casts) {
        this.casts[index] = newCast
        this.castChanged.next(this.casts.slice())
    }
    deleteCast(index: number) {
        this.casts.splice(index, 1);
        this.castChanged.next(this.casts.slice());
    }
}