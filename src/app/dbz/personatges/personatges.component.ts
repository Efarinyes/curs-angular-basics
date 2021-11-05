import { Component, Input } from '@angular/core';
import { Personatge } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personatges',
  templateUrl: './personatges.component.html',
  
})
export class PersonatgesComponent  {
  
 // @Input() personatges: Personatge[] = []
  get personatges() {
    return this.dbzservice.personatges
  }
  constructor( private dbzservice: DbzService) {}
}
