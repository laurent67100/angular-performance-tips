import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {
  @Input() character: Character;
  
  constructor() {
  }
  
  get characterInfo(): string {
    console.log('# DEMO: Computing character info ->', this.character.name);
    
    return [
      this.character.species || 'Unknown species',
      this.character.gender || 'Unknown gender'
    ].join(' - ');
  }
  
  ngOnInit() {
    console.log('# DEMO: CREATE card ->', this.character.name)
  }
  
  logHover() {
    console.log('------------------------------------------------------');
    console.log('# DEMO: Card hovered ->', this.character.name);
  }
  
  // /** Using OnChanges we can check if the character has changed **/
  // ngOnChanges({character}: SimpleChanges) {
  //   if (character) {
  //     const hasChanged = character.previousValue?.id !== character.currentValue?.id;
  //
  //     if (hasChanged) {
  //       this.characterInfo = this.getCharacterInfo(character.currentValue);
  //     }
  //   }
  // }
}
