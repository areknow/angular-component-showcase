import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShowcaseModule } from './shared/components/showcase/showcase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, ShowcaseModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
