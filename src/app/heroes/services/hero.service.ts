import { Injectable } from '@angular/core';
import { Hero } from '../data/hero';
import {MessageService} from '../../message/services/message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class HeroService {
  constructor(private http: HttpClient,
              private messageService: MessageService) { }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private getHerosUrl(): string {
    return 'api/heroes';
  };

  private getHeroUrl(id: string | number): string {
    return `api/heroes/${id}`;
  };

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  };

  private handleError<T> (operation = 'operation', result? : T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  };

  getHeroes(): Observable<Hero[]> {
    const url = this.getHerosUrl();
    return this.http.get<Hero[]>(url).pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = this.getHeroUrl(id);
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  };

  updateHero(hero: Hero): Observable<any> {
    const url = this.getHeroUrl(hero.id);
    return this.http.put(url, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  };

  addHero(hero: Hero): Observable<Hero> {
    const url = this.getHerosUrl();
    return this.http.post<Hero>(url, hero, this.httpOptions).pipe(
      tap((h: Hero) => this.log(`added hero w/ id=${h.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  };

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = this.getHeroUrl(id);
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap( _ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
}
