import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  exports: [NavComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
