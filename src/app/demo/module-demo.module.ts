import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDemoComponent } from './card-demo.component';
import { CardListDemoComponent } from './card-list-demo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CardListDemoComponent, CardDemoComponent],
  exports: [CardListDemoComponent],
})
export class ModuleDemoModule {}
