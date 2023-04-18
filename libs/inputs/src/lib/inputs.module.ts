import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestComponent } from './Test.component';

@NgModule({
  imports: [CommonModule, TestComponent],
  exports: [TestComponent]
})
export class InputsModule { }
