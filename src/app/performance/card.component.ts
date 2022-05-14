import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit, SimpleChanges
} from '@angular/core';
import { Character } from '../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() character: Character;
  
  // characterInfo: string;
  
  constructor(private _changeDetector: ChangeDetectorRef) {
  }
  
  ngOnInit() {
    console.log('# CREATE card ->', this.character.name)
  }

  getCharacterInfo(character: Character): string {
    console.log('# Computing character info ->', character.name);
    
    return [
      character.species || 'Unknown species',
      character.gender || 'Unknown gender',
    ].join(' - ');
  }

  logHover() {
    console.log('------------------------------------------------------');
    console.log('# Card hovered ->', this.character.name);
  }
}
