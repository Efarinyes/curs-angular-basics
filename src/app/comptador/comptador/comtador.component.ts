import { Component } from '@angular/core';

@Component({
    selector: 'comptador-app',
    template: `
        <h1> {{ titol }} </h1>
        <h3>{{ subtitol }}</h3>
        <hr>
        <h3> Treballem amb el <strong> {{ base }} </strong></h3>
        <button (click)="acumular( base )"> + {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular( -base )"> - {{ base }} </button>
    `
})

export class ComtadorComponent {
    titol: string = 'Comptador app';
    subtitol: string = 'Primera aplicació del curs'
    base: number = 5
    numero: number = this.base
      
    
    acumular(valor: number) {
    
    this.numero += valor
    
  }

}