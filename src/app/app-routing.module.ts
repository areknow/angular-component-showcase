import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'autocomplete',
  },
  {
    path: 'autocomplete',
    component: HomeComponent,
  },
  {
    path: 'button',
    component: HomeComponent,
  },
  {
    path: 'badge',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
