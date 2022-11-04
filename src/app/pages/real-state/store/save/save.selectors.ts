import { createSelector } from '@ngrx/store';
import { getRealStateState, RealStateState } from '../index';
import { ListState } from './save.reducer';

export const getListState = createSelector(
  getRealStateState,
  (state: RealStateState) => state.list,
)

export const getLoading = createSelector(
  getListState,
  (state: ListState) => state.loading,
)
