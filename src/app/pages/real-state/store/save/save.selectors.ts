import { createSelector } from '@ngrx/store';
import { getRealStateState, RealStateState } from '../index';
import { ListState } from './save.reducer';
//selector is used to get data from store global
export const getListState = createSelector(
  getRealStateState,
  (state: RealStateState) => state.list,
);

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading,
);

export const getRealStates = createSelector(
  getListState,
  (state: ListState) => state.realStates,
);
