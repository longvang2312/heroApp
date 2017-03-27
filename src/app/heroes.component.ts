import { Component } from '@angular/core';
import { Hero } from './iheroes';
@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes.html',
})
export class HeroesComponent { 
  title = 'Tour of Heroes';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
