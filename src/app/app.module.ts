import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShowcaseModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
