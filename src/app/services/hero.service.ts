import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { Hero } from '../Models/Hero';
import { HEROES } from '../data-store/mock-heroes';


@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('HeroService: Fetched Heroes.');
        return of(HEROES);
    }

}
