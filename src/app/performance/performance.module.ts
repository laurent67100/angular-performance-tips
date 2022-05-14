import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardListComponent } from './card-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CardListComponent, CardComponent],
  exports: [CardListComponent],
})
export class PerformanceModule {}
