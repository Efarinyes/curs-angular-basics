import { Component } from '@angular/core';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.component.html',
  
})
export class LlistatComponent {

    herois: string[] = ['Spiderman', 'Batman', 'Hulk', 'Catwomen', 'Capitán América']
    heroiBorrat: string = ''

    borrarHeroi(): void {
        this.heroiBorrat = this.herois.shift() || ''
    }

  }


