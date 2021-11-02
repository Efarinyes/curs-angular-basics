
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroiComponent } from './heroi/heroi.component';
import { LlistatComponent } from './llistat/llistat.component';


@NgModule({
    declarations: [
        HeroiComponent,
        LlistatComponent
    ],
    exports: [
        LlistatComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroisModule { }