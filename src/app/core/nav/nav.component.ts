import { Component } from '@angular/core';
import { LINKS } from './links';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  links = LINKS.sort(); // auto generate these
}
