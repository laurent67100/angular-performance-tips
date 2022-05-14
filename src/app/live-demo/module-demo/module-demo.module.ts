import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDemoComponent } from '../card-demo/card-demo.component';
import { CardContainerDemoComponent } from '../card-container-demo/card-container-demo.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CardContainerDemoComponent, CardDemoComponent],
  exports: [CardContainerDemoComponent],
})
export class ModuleDemoModule {}
