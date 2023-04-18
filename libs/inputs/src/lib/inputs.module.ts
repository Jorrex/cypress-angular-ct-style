import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TextComponent } from './Text.component';

@NgModule({
  imports: [CommonModule, TextComponent],
  exports: [TextComponent]
})
export class InputsModule { }
