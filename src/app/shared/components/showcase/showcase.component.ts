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
import { ActivatedRoute } from '@angular/router';
import { capitalize } from '../../utils/capitalize';

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

  expanded = false;
  tsExpanded = false;
  templateExpanded = false;

  demoLabel!: string;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private route: ActivatedRoute
  ) {
    this.demoLabel = this.route.snapshot.data['label'];
  }

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
      factory as ComponentFactory<any>,
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

  titleClick(selectedTitle: string): void {
    if (!this.expanded) {
      this.expanded = true;
      switch (selectedTitle) {
        case 'typescript':
          this.tsExpanded = true;
          this.templateExpanded = false;
          break;
        case 'html':
          this.tsExpanded = false;
          this.templateExpanded = true;
          break;
      }
    } else {
      this.expanded = true;
      if (selectedTitle === 'typescript' && !this.tsExpanded) {
        this.tsExpanded = true;
        this.templateExpanded = false;
      }
      if (selectedTitle === 'html' && !this.templateExpanded) {
        this.tsExpanded = false;
        this.templateExpanded = true;
      }
      if (
        (selectedTitle === 'html' && this.templateExpanded) ||
        (selectedTitle === 'typescript' && this.tsExpanded)
      ) {
        this.expanded = false;
      }
    }
  }
}
