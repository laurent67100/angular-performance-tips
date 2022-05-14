import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyFunctionPipe } from './pipes/apply-function.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchCharacterComponent } from './components/search/search-character.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [ApplyFunctionPipe, SearchCharacterComponent],
  exports: [ApplyFunctionPipe, SearchCharacterComponent]
})
export class SharedModule {
}
