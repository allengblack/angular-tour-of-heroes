import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../Models/Hero';
//import { HEROES } from '../data-store/mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    //hero: Hero = {
    //    id: 1,
    //    name: "Allengblack"
    //}

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    
}
