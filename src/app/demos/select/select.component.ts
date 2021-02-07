import { Component } from '@angular/core';

@Component({
  templateUrl: 'select.component.html',
  styles: [],
})
export class SelectComponent {
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
