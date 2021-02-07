import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BottomsheetComponent } from './bottomsheet.component';
import { BottomSheetOverviewExampleSheet } from './sheet.component';

@NgModule({
  declarations: [BottomsheetComponent, BottomSheetOverviewExampleSheet],
  exports: [BottomsheetComponent],
  imports: [MatBottomSheetModule, CommonModule, MatListModule, MatButtonModule],
})
export class BottomsheetModule {}
