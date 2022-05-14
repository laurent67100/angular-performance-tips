import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Module1Module } from './bad-performance/module-1/module-1.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Module2Module } from './good-performance/module-2/module2.module';
import { ModuleDemoModule } from './live-demo/module-demo/module-demo.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, Module1Module, Module2Module, ModuleDemoModule, MatTabsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
