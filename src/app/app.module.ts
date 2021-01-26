import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, ShowcaseModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
