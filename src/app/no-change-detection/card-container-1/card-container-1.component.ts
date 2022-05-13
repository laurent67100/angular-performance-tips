import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSourceService } from '../../datasource.service';
import { Character } from '../../model';

@Component({
  selector: 'app-card-container-1',
  templateUrl: './card-container-1.component.html',
  styleUrls: ['./card-container-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContainer1Component implements OnInit {
  characters$: Observable<Character[]>;

  constructor(private _dataSourceService: DataSourceService) {
    this.characters$ = this._dataSourceService.characters$;
  }

  ngOnInit() {}
}
