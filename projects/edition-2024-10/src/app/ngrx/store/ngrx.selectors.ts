import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NgrxState } from './ngrx.state';

const selectMainState = createFeatureSelector<NgrxState>('main');

export const selectCounter = createSelector(
  selectMainState,
  (state) => state.counter
);

export const selectMessage = createSelector(
  selectMainState,
  (state) => state.message
);

export const selectUserName = createSelector(
  selectMainState,
  (state) => state.user.name
);
