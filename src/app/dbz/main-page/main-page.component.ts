import { Component } from '@angular/core';
import { Personatge } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nou: Personatge = {
    nom: 'Follet Tortuga',
    poder: 19000
  }
  constructor() {}
  
}
