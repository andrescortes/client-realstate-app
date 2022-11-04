import * as fromList from './save/save.reducer';
import { SaveEffects } from 'src/app/pages/real-state/store/save/save.effects';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface RealStateState {
  list: fromList.ListState;
}

export const reducers: ActionReducerMap<RealStateState> = {
  list: fromList.reducer,
}

export const effects: any = [
  SaveEffects,
]

export const getRealStateState = createFeatureSelector<RealStateState>('realState');
