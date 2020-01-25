import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S2Page } from './s2.page';

const routes: Routes = [
  {
    path: '',
    component: S2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S2PageRoutingModule {}
