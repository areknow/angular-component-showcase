import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
    <mat-nav-list>
      <a
        href="https://keep.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Keep</span>
        <span mat-line>Add to a note</span>
      </a>

      <a
        href="https://docs.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Docs</span>
        <span mat-line>Embed in a document</span>
      </a>

      <a
        href="https://plus.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Plus</span>
        <span mat-line>Share with your friends</span>
      </a>

      <a
        href="https://hangouts.google.com/"
        mat-list-item
        (click)="openLink($event)"
      >
        <span mat-line>Google Hangouts</span>
        <span mat-line>Show to your coworkers</span>
      </a>
    </mat-nav-list>
  `,
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
