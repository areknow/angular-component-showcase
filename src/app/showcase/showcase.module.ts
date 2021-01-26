import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [BrowserModule, HighlightModule],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
