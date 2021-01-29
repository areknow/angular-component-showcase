import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ButtontoggleComponent } from './buttontoggle.component';

@NgModule({
  declarations: [ButtontoggleComponent],
  exports: [ButtontoggleComponent],
  imports: [CommonModule, MatButtonToggleModule],
})
export class ButtontoggleModule {}
