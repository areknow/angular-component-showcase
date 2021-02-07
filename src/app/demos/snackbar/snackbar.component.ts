import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: 'snackbar.component.html',
  styles: [
    `
      mat-form-field {
        margin-right: 12px;
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
