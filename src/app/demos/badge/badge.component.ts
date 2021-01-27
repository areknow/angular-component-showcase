import { Component } from '@angular/core';

@Component({
  templateUrl: 'badge.component.html',
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
