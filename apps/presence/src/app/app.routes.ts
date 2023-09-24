import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () => import('@janjique/users').then((m) => m.UsersModule),
  },
];
