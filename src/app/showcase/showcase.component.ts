import {
  AfterViewInit,
  Compiler,
  Component,
  ComponentFactory,
  Injector,
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

  @Input() featureName!: string;

  constructor(private compiler: Compiler, private injector: Injector) {}

  ngAfterViewInit() {
    this.renderComponent();
  }

  async renderComponent() {
    // Import feature module
    const module = await import(
      `../components/${this.featureName}/${this.featureName}.module`
    );
    // Get module name
    const [, moduleName] = Object.getOwnPropertyNames(module);
    // Compile module and component
    const compiled = await this.compiler.compileModuleAndAllComponentsAsync(
      module[moduleName]
    );
    // Build module module factory
    const moduleRef = compiled.ngModuleFactory.create(this.injector);
    // Build component factory
    const [factory] = compiled.componentFactories;
    // Create and inject component
    this.component.createComponent(
      factory as ComponentFactory<any>,
      undefined,
      this.injector,
      undefined,
      moduleRef
    );
  }
}
