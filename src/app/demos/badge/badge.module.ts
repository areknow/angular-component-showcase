import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeComponent } from './badge.component';

@NgModule({
  declarations: [BadgeComponent],
  exports: [BadgeComponent],
  imports: [MatBadgeModule, CommonModule, MatIconModule, MatButtonModule],
})
export class BadgeModule {}
