import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'environments/environment';
import { SharedState } from './actions/shared.state';
import { SHARED_STATE_NAME } from './selectors/shared.selector';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedReducer } from './reducers/shared.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  [SHARED_STATE_NAME]: SharedReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

// Place the debug option inside either of the above arrays if debugging is needed for the app state
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    // console.log('state', state);
    // console.log('action', action);
    return reducer(state, action);
  }
}