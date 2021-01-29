import { Component } from '@angular/core';

@Component({
  templateUrl: 'checkbox.component.html',
  styles: [
    `
      .example-h2 {
        margin: 10px;
      }

      .example-section {
        display: flex;
        align-content: center;
        align-items: center;
        height: 60px;
      }

      .example-margin {
        margin: 0 10px;
      }
    `,
  ],
})
export class CheckboxComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
