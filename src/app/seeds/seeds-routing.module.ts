import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeedsPage } from './seeds.page';

const routes: Routes = [
  {
    path: '',
    component: SeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedsPageRoutingModule {}
