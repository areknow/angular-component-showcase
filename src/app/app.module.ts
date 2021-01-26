import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { AppComponent } from './app.component';
import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShowcaseModule, HighlightModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
})
export class AppModule {}
