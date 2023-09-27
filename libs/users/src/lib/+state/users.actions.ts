import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export const initUsers = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

export const loadWorkingDays = createAction(
  '[Users] Load Working Days'
);

export const loadWorkingDaysSuccess = createAction(
  '[Users] Load Working Days Success',
  props<{ workingDays: Date[]}>()
);

export const loadWorkingDaysFailure = createAction(
  '[Users] Load Working Days Failure',
  props<{ error: any }>()
);
