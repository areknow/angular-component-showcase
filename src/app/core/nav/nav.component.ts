import { Component } from '@angular/core';
import { DEMOS } from 'src/app/demos';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  links = DEMOS.sort();
}
