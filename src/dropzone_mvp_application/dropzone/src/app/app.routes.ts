import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'videos',
    loadComponent: () =>
      import('./pages/video-list/video-list').then((m) => m.VideoList),
  },
  {
    path: 'video/:id',
    loadComponent: () =>
      import('./pages/video-detail/video-detail').then((m) => m.VideoDetail),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
