import {
  Compiler,
  Component,
  ComponentFactory,
  Injector,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: 'showcase.component.html',
  styleUrls: ['showcase.component.scss'],
})
export class ShowcaseComponent implements OnChanges {
  @ViewChild('component', { static: true, read: ViewContainerRef })
  component!: ViewContainerRef;

  @Input() demoName!: string;

  typescript!: string;
  template!: string;

  constructor(private compiler: Compiler, private injector: Injector) {}

  ngOnChanges() {
    this.component.clear();
    this.renderComponent();
    this.renderSource();
  }

  async renderComponent() {
    // Import feature module
    const module = await import(
      `../../../demos/${this.demoName}/${this.demoName}.module`
    );
    // Generate names
    const moduleName = `${capitalize(this.demoName)}Module`;
    const componentName = `${capitalize(this.demoName)}Component`;
    // Compile module and component
    const compiled = await this.compiler.compileModuleAndAllComponentsAsync(
      module[moduleName]
    );
    // Create module factory
    const moduleRef = compiled.ngModuleFactory.create(this.injector);
    // Get component factory
    const factory = compiled.componentFactories.find(
      (factory) => factory.componentType.name === componentName
    );
    // Create and inject component
    this.component.createComponent(
      factory as ComponentFactory<typeof componentName>,
      undefined,
      this.injector,
      undefined,
      moduleRef
    );
  }

  async renderSource() {
    // Load component typescript source code
    const typescriptSource = await import(
      `!!raw-loader!../../../demos/${this.demoName}/${this.demoName}.component.ts`
    );
    this.typescript = typescriptSource.default.substring(
      typescriptSource.default.indexOf('export class')
    );
    // Load component template source code
    const templateSource = await import(
      `!!raw-loader!../../../demos/${this.demoName}/${this.demoName}.component.html`
    );
    this.template = templateSource.default;
  }
}

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
