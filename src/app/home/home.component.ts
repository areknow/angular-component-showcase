import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  demo!: string;

  constructor(private router: Router) {
    this.demo = this.router.url.split('/')[1];
  }
}
