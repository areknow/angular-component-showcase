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
  templateUrl: 'showcase.component.html',
})
export class ShowcaseComponent implements AfterViewInit {
  @ViewChild('component', { static: true, read: ViewContainerRef })
  component!: ViewContainerRef;

  @Input() featureName!: string;

  ts!: string;
  html!: string;

  constructor(private compiler: Compiler, private injector: Injector) {}

  ngAfterViewInit() {
    this.renderComponent();
    this.renderSource();
  }

  async renderComponent() {
    // Import feature module
    const module = await import(
      `../demos/${this.featureName}/${this.featureName}.module`
    );
    // Get module name
    const [, moduleName] = Object.getOwnPropertyNames(module);
    // Compile module and component
    const compiled = await this.compiler.compileModuleAndAllComponentsAsync(
      module[moduleName]
    );
    // Get module factory reference
    const moduleRef = compiled.ngModuleFactory.create(this.injector);
    // Get component factory
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

  async renderSource() {
    // Load typescript component source code
    const ts = await import(
      `!!raw-loader!../demos/${this.featureName}/${this.featureName}.component.ts`
    );
    this.ts = ts.default.substring(ts.default.indexOf('export class'));
    // Load angular template source code
    const html = await import(
      `!!raw-loader!../demos/${this.featureName}/${this.featureName}.component.html`
    );
    this.html = html.default;
  }
}
