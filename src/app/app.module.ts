import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroisModule } from './herois/herois.module';
import { AppComponent } from './app.component';
import { ComptadorModule } from './comptador/comptador.module';
import { DbzModule } from './dbz/dbz.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
  
  BrowserModule,
  HeroisModule,
  ComptadorModule,
  DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
