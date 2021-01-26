import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  template: `<div #content><ng-content></ng-content></div>`,
})
export class ShowcaseComponent {}
