import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent }  from './heroes.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ HeroesComponent ],
  bootstrap:    [ HeroesComponent ]
})
export class AppModule { }
