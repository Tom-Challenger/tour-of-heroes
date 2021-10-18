import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  //
  // With providedIn: 'any'
  // all eagerly loaded modules share a singleton instance;
  // however, lazy loaded modules each get their own unique instance
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.addMessage('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Operator '!' is typescript post-fix expression operator (Non-null Assertion Operator. Postfix)
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
