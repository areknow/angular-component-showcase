import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowcaseModule } from '../shared/components/showcase/showcase.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ShowcaseModule],
  exports: [HomeComponent],
})
export class HomeModule {}
