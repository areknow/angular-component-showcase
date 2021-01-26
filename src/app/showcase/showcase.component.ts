import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-showcase',
  template: `<ng-container #component></ng-container>`,
})
export class ShowcaseComponent implements AfterViewInit {
  @ViewChild('component', { static: true, read: ViewContainerRef })
  component!: ViewContainerRef;

  @Input() moduleName!: string;

  async ngAfterViewInit() {
    const module = await import(
      `../components/${this.moduleName}/${this.moduleName}.module`
    );
    console.log(module);
  }
}
