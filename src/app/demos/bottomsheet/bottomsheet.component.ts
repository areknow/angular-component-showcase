import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheet } from './sheet.component';

@Component({
  templateUrl: 'bottomsheet.component.html',
})
export class BottomsheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}
