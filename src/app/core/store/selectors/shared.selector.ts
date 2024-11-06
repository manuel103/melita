import { SharedState } from '../actions/shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SHARED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getSpinner = createSelector(getSharedState, (state: any) => {
    return state.showSpinner;
});

export const getSpinnerCounter = createSelector(getSharedState, (state: any) => {
    return state.spinnerCounter;
});

export const getNotificationMessage = createSelector(getSharedState, (state: any) => {
    return { notificationType: state.notificationType, message: state.notificationMessage };
});
