import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, combineLatest, map, Observable, ReplaySubject, share, switchMap } from 'rxjs';
import { Character } from './model';
import { Injectable } from '@angular/core';

let nextCharacterId = 9999;

@Injectable()
export class DataSourceService {
  filteredCharacters$: Observable<Character[]>;
  
  private _filterSubject = new BehaviorSubject<string>('');
  private _addedCharactersSubject = new BehaviorSubject<Character[]>([]);
  private _sortSubject = new BehaviorSubject<'asc' | 'desc'>(null);
  
  constructor(private http: HttpClient) {
    const fetchAllCharacters$ = this.http
      .get<Character[]>(
        'https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json'
      );
    
    
    const filteredCharacters$ = this._filterSubject.asObservable().pipe(
      switchMap((filterText) => combineLatest([fetchAllCharacters$, this._addedCharactersSubject.asObservable(), this._sortSubject.asObservable()]).pipe(
        map(([characters, addedCharacters, sort]) => {
          let filteredData = [...addedCharacters, ...characters].filter(character => character.name.toLowerCase().includes(filterText.toLowerCase()));
          if (sort) {
            filteredData = filteredData.sort((a, b) => sort === 'asc' ? (a.name < b.name ? -1 : 1) : (a.name > b.name ? -1 : 1))
          }
          // return filteredData.map(character => ({...character})); // create a new object to simulate a backend api response that would return new instances on every fetch
          return filteredData;
        })
      )
    ));
    
    // make the observable hot by sharing it (all the subscribers will receive the same instance rather than a new one)
    // that way we dont call the server for data for each subscriber
    this.filteredCharacters$ = filteredCharacters$
      .pipe(
        share({
          connector: () => new ReplaySubject(1),
          resetOnComplete: true,
          resetOnError: true,
          resetOnRefCountZero: true
        })
      );
  }
  
  filterCharacters(text: string) {
    this._filterSubject.next(text);
  }
  
  addCharacter() {
    const newCharacter: Character = {
      id: ++nextCharacterId,
      name: '#Random Character #' + nextCharacterId,
      species: 'Bastard',
      image: 'https://loremflickr.com/320/240'
    }
    this._addedCharactersSubject.next([newCharacter, ...this._addedCharactersSubject.value]);
    console.log('added', this._addedCharactersSubject.value)
  }
  
  sort(sort: 'asc' | 'desc') {
    this._sortSubject.next(sort);
  }
}
