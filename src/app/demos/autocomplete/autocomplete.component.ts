import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: 'autocomplete.component.html',
  styles: [],
})
export class AutocompleteComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
