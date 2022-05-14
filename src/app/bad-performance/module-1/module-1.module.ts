import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card1Component } from '../card-1/card-1.component';
import { CardContainer1Component } from '../card-container-1/card-container-1.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CardContainer1Component, Card1Component],
  exports: [CardContainer1Component],
})
export class Module1Module {}
