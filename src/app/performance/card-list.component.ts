import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataSourceService } from '../datasource.service';
import { Character } from '../model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent implements OnInit {
  characters$: Observable<Character[]>;
  count$: Observable<number>;

  constructor(private _dataSourceService: DataSourceService) {
    this.characters$ = this._dataSourceService.filteredCharacters$;
    this.count$ = this._dataSourceService.filteredCharacters$.pipe(map(characters => characters.length));
  }
  
  ngOnInit() {}
  
  trackByCharacterId(_, character: Character) {
    return character.id;
  }
}
