import { Component, OnInit } from '@angular/core';
import { LINKS } from './links';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  links = LINKS.sort(); // auto generate these

  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  changeDemo(demo: string): void {
    this.navService.activeDemo = demo;
  }
}
