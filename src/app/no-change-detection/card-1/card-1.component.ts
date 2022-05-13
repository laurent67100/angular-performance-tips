import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Character } from '../../model';

@Component({
  selector: 'app-card-1',
  templateUrl: './card-1.component.html',
  styleUrls: ['./card-1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card1Component implements OnInit {
  @Input() character: Character;

  constructor(private _changeDetector: ChangeDetectorRef) {}

  ngOnInit() {}
  ngAfterViewInit() {}

  get characterInfo(): string {
    console.log('# characterInfo ->', this.character.name);

    return [
      this.character.species || 'Unknown species',
      this.character.gender || 'Unknown gender',
    ].join(' - ');
  }

  logHover() {
    console.log('------------------------------------------------------');
    console.log('card Hovered', this.character.name);
  }
}