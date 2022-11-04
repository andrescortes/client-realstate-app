import { RealStateResponse } from './save.models';
import * as fromActions from './save.actions';

export interface ListState {
  realState: RealStateResponse | null;
  loading: boolean | null;
  error: string | null;
}

export const initialState: ListState = {
  realState: null,
  loading: null,
  error: null,
}

export function reducer(state: ListState = initialState, action: fromActions.All | any) {
  switch (action.type) {

    case fromActions.Types.CREATE: {
      return {...state, loading: true, error: null};
    }

    case fromActions.Types.CREATE_SUCCESS: {
      return {...state, realState: action.realState, loading: false, error: null};
    }

    case fromActions.Types.CREATE_ERROR: {
      return {...state, loading: false, error: action.error};
    }

    default: {
      return state;
    }

  }
}
