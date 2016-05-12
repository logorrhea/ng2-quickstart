import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector:    'heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:   ['app/heroes.component.css'],
    directives:  [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    goToDetail() {
        if (this.selectedHero) {
            let link = ['HeroDetail', { id: this.selectedHero.id }];
            this.router.navigate(link);
        }
    }

}
