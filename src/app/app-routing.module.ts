import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'seeds',
    loadChildren: () => import('./seeds/seeds.module').then( m => m.SeedsPageModule)
  },
  {
    path: 's1',
    loadChildren: () => import('./s1/s1.module').then( m => m.S1PageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'p1',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'l1',
    loadChildren: () => import('./l1/l1.module').then( m => m.L1PageModule)
  },
  {
    path: 'p2',
    loadChildren: () => import('./p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'p3',
    loadChildren: () => import('./p3/p3.module').then( m => m.P3PageModule)
  },
  {
    path: 'p4',
    loadChildren: () => import('./p4/p4.module').then( m => m.P4PageModule)
  },
  {
    path: 'l2',
    loadChildren: () => import('./l2/l2.module').then( m => m.L2PageModule)
  },
  {
    path: 'l3',
    loadChildren: () => import('./l3/l3.module').then( m => m.L3PageModule)
  },
  {
    path: 'm1',
    loadChildren: () => import('./m1/m1.module').then( m => m.M1PageModule)
  },
  {
    path: 'm2',
    loadChildren: () => import('./m2/m2.module').then( m => m.M2PageModule)
  },
  {
    path: 'm3',
    loadChildren: () => import('./m3/m3.module').then( m => m.M3PageModule)
  },
  {
    path: 's2',
    loadChildren: () => import('./s2/s2.module').then( m => m.S2PageModule)
  },
  {
    path: 's3',
    loadChildren: () => import('./s3/s3.module').then( m => m.S3PageModule)
  },
  {
    path: 's4',
    loadChildren: () => import('./s4/s4.module').then( m => m.S4PageModule)
  },
  {
    path: 'p5',
    loadChildren: () => import('./p5/p5.module').then( m => m.P5PageModule)
  },
  {
    path: 'p6',
    loadChildren: () => import('./p6/p6.module').then( m => m.P6PageModule)
  },
  {
    path: 'p7',
    loadChildren: () => import('./p7/p7.module').then( m => m.P7PageModule)
  },
  {
    path: 'map1',
    loadChildren: () => import('./map1/map1.module').then( m => m.Map1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
