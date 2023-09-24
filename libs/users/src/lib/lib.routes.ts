import { Route } from '@angular/router';
import { UsersOverviewComponent } from './components/users-overview/users-overview.component';

export const usersRoutes: Route[] = [
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
  { path: '', pathMatch: 'full', component: UsersOverviewComponent },
];
