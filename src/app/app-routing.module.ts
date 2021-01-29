import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DEMOS } from './demos';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'autocomplete',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    DEMOS.forEach((item) => {
      this.router.config.push({
        path: item.key,
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        data: { label: item.label },
      });
    });
  }
}
