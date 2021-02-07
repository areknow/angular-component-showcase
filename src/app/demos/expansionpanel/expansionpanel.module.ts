import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionpanelComponent } from './expansionpanel.component';

@NgModule({
  declarations: [ExpansionpanelComponent],
  exports: [ExpansionpanelComponent],
  imports: [CommonModule, MatExpansionModule],
})
export class ExpansionpanelModule {}
