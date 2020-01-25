import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S1Page } from './s1.page';

const routes: Routes = [
  {
    path: '',
    component: S1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S1PageRoutingModule {}
