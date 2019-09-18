import { Subject } from "rxjs";
import { Casts } from '../shared/casts.model'


export class ActorListingService {
    castChanged = new Subject<Casts[]>();
    statedEditing = new Subject<number>();
    private casts: Casts[] = [
        new Casts('Heath Ledger',2),
        new Casts('Johny depp',1)
      ];

    getCasts() {
        return this.casts.slice();
    }  

    addCast(cast: Casts) {
        this.casts.push(cast)
        this.castChanged.next(this.casts.slice());
    }
}