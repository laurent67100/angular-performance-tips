import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { share, startWith } from 'rxjs/operators';
import { Character } from './model';

@Injectable({ providedIn: 'root' })
export class DataSourceService {
  characters$: Observable<Character[]>;

  constructor(private http: HttpClient) {
    this.characters$ = this.http
      .get<Character[]>(
        'https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json'
      )
      .pipe(
        startWith([]),
        share({
          connector: () => new ReplaySubject(1),
          resetOnComplete: true,
          resetOnError: true,
          resetOnRefCountZero: true,
        })
      );
  }
}
