import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSourceService } from '../../datasource.service';
import { Character } from '../../model';

@Component({
  selector: 'app-card-container-2',
  templateUrl: './card-container2.component.html',
  styleUrls: ['./card-container2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DataSourceService]
})
export class CardContainer2Component implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private _dataSourceService: DataSourceService) {
    this.characters$ = this._dataSourceService.filteredCharacters$;
  }
  

  ngOnInit() {}
  
  trackByCharacterId(_, character: Character) {
    return character.id;
  }
}
