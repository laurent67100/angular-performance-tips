import {
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
})
export class Card1Component implements OnInit {
  @Input() character: Character;

  constructor(private _changeDetector: ChangeDetectorRef) {}

  ngOnInit() {}

  get characterInfo(): string {
    console.log('# Computing character info ->', this.character.name);

    return [
      this.character.species || 'Unknown species',
      this.character.gender || 'Unknown gender',
    ].join(' - ');
  }

  logHover() {
    console.log('------------------------------------------------------');
    console.log('# Card hovered ->', this.character.name);
  }
}
