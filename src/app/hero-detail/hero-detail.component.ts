import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Hero } from '../Models/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor() { }

    ngOnInit() {
    }

}
