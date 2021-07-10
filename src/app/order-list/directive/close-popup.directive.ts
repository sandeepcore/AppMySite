import { Directive } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive({
  selector: '[appClosePopup]'
})
export class ClosePopupDirective {

  private closePopup$:Subject<boolean>=new Subject();
  constructor() { }

   update(value:boolean){
     this.closePopup$.next(value);
   }


   getCloseUp():Observable<boolean>{
     return this.closePopup$.asObservable();
   }
}
