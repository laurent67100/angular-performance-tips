import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit, SimpleChanges
} from '@angular/core';
import { Character } from '../../model';

@Component({
  selector: 'app-card-2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card2Component implements OnInit {
  @Input() character: Character;
  
  // characterInfo: string;
  
  constructor(private _changeDetector: ChangeDetectorRef) {
    console.log('create card')
  }
  
  ngOnInit() {
    console.log('create card for ', this.character.name)
  }
  

  /** Alternate way to pipe is to use ngOnChanges, tho it may be more verbose **/
  // ngOnChanges({character}: SimpleChanges) {
  //   if (character) {
  //     this.characterInfo = this.getCharacterInfo(character);
  //   }
  // }
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
