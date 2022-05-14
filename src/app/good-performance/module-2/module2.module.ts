import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card2Component } from '../card-2/card2.component';
import { CardContainer2Component } from '../card-container-2/card-container2.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CardContainer2Component, Card2Component],
  exports: [CardContainer2Component],
})
export class Module2Module {}
