import { createReducer, on } from '@ngrx/store';
import { initialState } from '../actions/shared.state';
import { hideSpinner, setNotificationMessage, showSpinner } from '../actions/shared.actions';
import { routerNavigationAction } from '@ngrx/router-store';

const _sharedReducer = createReducer(
    initialState,
    on(setNotificationMessage, (state: any, action: any) => {
        return {
            ...state,
            notificationType: action.notificationType,
            notificationMessage: action.notificationMessage,
        };
    }),
    on(routerNavigationAction, (state) => ({
        ...state,
        notificationType: null,
        notificationMessage: null,
    })),
    on(showSpinner, (state: any) => {
        return { ...state, spinnerCounter: state.spinnerCounter + 1 }
    }),
    on(hideSpinner, (state: any) => {
        return { ...state, spinnerCounter: state.spinnerCounter > 0 ? state.spinnerCounter - 1 : 0 }
    }),
);

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action);
}
