import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personatge } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-afegir',
  templateUrl: './afegir.component.html',
  
})
export class AfegirComponent {
  
  @Input() nouPersonatge: Personatge = {
      nom: '',
      poder: 0
  }
  // @Output() onNouPersonatge: EventEmitter<Personatge> = new EventEmitter()
   constructor( private dbzService: DbzService) {}

  afegir() {

    if( this.nouPersonatge.nom.trim().length === 0) {
      return
    }
    // console.log(this.nouPersonatge)
    // this.onNouPersonatge.emit(this.nouPersonatge)
     this.dbzService.afegirPersonatge(this.nouPersonatge)
     
     this.nouPersonatge = {
       nom:'',
       poder: 0
     }
     
  }

}
