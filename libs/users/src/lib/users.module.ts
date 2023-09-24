import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';
import { UsersFacade } from './+state/users.facade';
import { HttpClientModule } from '@angular/common/http';
import { UsersOverviewComponent } from './components/users-overview/users-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    HttpClientModule,
  ],
  providers: [UsersFacade],
  declarations: [UsersOverviewComponent],
})
export class UsersModule {}
