import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./business/dashboard/dashboard.component'),
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./business/client/client-home/client-list.component'),
      },
      {
        path: 'client/view/:id',
        loadComponent: () =>
          import('./business/client/client-view/view.component'),
      },
      {
        path: 'client/create',
        loadComponent: () =>
          import('./business/client/client-create/client-create.component'),
      },
      {
        path: 'client/update/:id',
        loadComponent: () =>
          import('./business/client/client-update/client-update.component'),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
