import { Component } from "@angular/core";



@Component({
    selector: 'app-heroi',
    templateUrl: 'heroi.component.html'
})

export class HeroiComponent {

    nom: string = 'Hulk'
    edat: number = 55

    get nomCapitalitzat(): string {
        return this.nom.toUpperCase()
    }

    obtenirNom(): string {
        return `${this.nom} - ${this.edat }`
    }

    cambiarNom(): void {
        this.nom = 'Spiderman'
    }
    cambiarEdat(): void {
        this.edat = 35
    }

}