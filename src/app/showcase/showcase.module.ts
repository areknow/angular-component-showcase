import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [BrowserModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
