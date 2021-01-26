import { Component } from '@angular/core';

@Component({
  templateUrl: 'button.component.html',
  styles: [
    `
      button:not(:last-child) {
        margin-right: 15px;
      }
    `,
  ],
})
export class ButtonComponent {
  buttons = [
    {
      label: 'Basic',
      disabled: false,
    },
    {
      label: 'Primary',
      color: 'primary',
      disabled: false,
    },
    {
      label: 'Accent',
      color: 'accent',
      disabled: false,
    },
    {
      label: 'Warn',
      color: 'warn',
      disabled: false,
    },
    {
      label: 'Disabled',
      disabled: true,
    },
  ];
}
