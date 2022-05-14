import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSourceService } from '../../datasource.service';
import { Character } from '../../model';

@Component({
  selector: 'app-card-container-demo',
  templateUrl: './card-container-demo.component.html',
  styleUrls: ['./card-container-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DataSourceService]
})
export class CardContainerDemoComponent implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private _dataSourceService: DataSourceService) {
    this.characters$ = this._dataSourceService.filteredCharacters$;
  }

  ngOnInit() {}
}
