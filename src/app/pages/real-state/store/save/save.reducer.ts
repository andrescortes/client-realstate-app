import { RealStateResponse } from './save.models';
import * as fromActions from './save.actions';

export interface ListState {
  realStates: RealStateResponse[] | null;
  realState: RealStateResponse | null;
  loading: boolean | null;
  error: string | null;
}

export const initialState: ListState = {
  realStates: null,
  realState: null,
  loading: null,
  error: null,
}

//logict to update state in store
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

    case fromActions.Types.READ: {
      return {...state, loading: true, error: null};
    }

    case fromActions.Types.READ_SUCCESS: {
      return {...state, loading: false, realStates: action.realStates};
    }

    case fromActions.Types.READ_ERROR: {
      return {...state, loading: false, error: action.error};
    }

    default: {
      return state;
    }

  }
}
