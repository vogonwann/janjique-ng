import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, exhaustMap, map } from 'rxjs';
import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import { UsersService } from '../services/users.service';
import { UsersEntity } from './users.models';
import { WorkingDaysService } from '../services/working-days.service';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.initUsers),
      exhaustMap(() => this.usersService.getAll()
        .pipe(
          map((users: UsersEntity[]) => UsersActions.loadUsersSuccess({ users })),
      catchError((error) => {
        console.error('Error', error);
        return of(UsersActions.loadUsersFailure({ error }));
      })
    )
  )));

  loadWorkingDays$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UsersActions.loadWorkingDays),
        exhaustMap(() => this.workingDaysService.getWorkingDays()
          .pipe(
            map((workingDays: Date[]) => UsersActions.loadWorkingDaysSuccess({ workingDays })),
        catchError((error) => {
          return of(UsersActions.loadWorkingDaysFailure({ error }))
        })
      )
  )));

  constructor(
    private readonly usersService: UsersService,
    private readonly workingDaysService: WorkingDaysService
    ) {}
}
