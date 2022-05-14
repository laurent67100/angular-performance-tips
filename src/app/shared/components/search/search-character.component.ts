import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataSourceService } from '../../../datasource.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCharacterComponent {
  
  constructor(private _dataSourceService: DataSourceService) {
  }
  
  onTextChanged(text: string) {
    this._dataSourceService.filterCharacters(text)
  }
  
  addCharacter() {
    this._dataSourceService.addCharacter();
  }
  
  sortAsc() {
    this._dataSourceService.sort('asc');
  }
  
  sortDesc() {
    this._dataSourceService.sort('desc');
  }
}
