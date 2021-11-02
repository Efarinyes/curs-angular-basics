import { CommonModule } from '@angular/common';
import { NgModule }  from '@angular/core'
import { ComtadorComponent } from './comptador/comtador.component';


@NgModule({
    declarations: [
        ComtadorComponent
    ],
    exports: [
        ComtadorComponent
    ],
    imports: [
        
    ]
})
export class ComptadorModule {}