import { createAction, props } from '@ngrx/store';

export const setCounter = createAction(
  '[NgrxPage] Set Counter',
  props<{ newValue: number }>()
);

export const setMessage = createAction(
  '[NgrxPage] Set Message',
  props<{ newMessage: string }>()
);

export const getUserName = createAction('[NgrxPage] Get User Name');

export const setUserName = createAction(
  '[NgrxPage] Set User Name',
  props<{ newName: string }>()
);
