import { Injectable } from "@angular/core";
import { Personatge } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService {

    private _personatges: Personatge[] = [
        { 
          nom:'Goku',
          poder: 17500
        },
        {
          nom: 'Vegeta',
          poder: 15700
        }
      ]

      get personatges(): Personatge[] {
          return [...this._personatges]
      }

    constructor() {
        
    }

    afegirPersonatge( personatge: Personatge) {
        this._personatges.push(personatge)
    }

}