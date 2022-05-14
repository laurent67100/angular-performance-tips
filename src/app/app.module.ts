import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerformanceModule } from './performance/performance.module';
import { ModuleDemoModule } from './demo/module-demo.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, PerformanceModule, ModuleDemoModule, MatTabsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
