import { Component } from '@angular/core';
import { ButtonModule } from './components/button/button.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  buttonModule = ButtonModule;
}
