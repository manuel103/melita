import { createAction, props } from '@ngrx/store';

export const showSpinner = createAction('[Global] showSpinner')
export const hideSpinner = createAction('[Global] hideSpinner')

export const SET_NOTIFICATION_MESSAGE = '[shared state] set notification message';

/**
 * Allowed notification types: 'success', 'warning' & 'error'
 */
export const setNotificationMessage = createAction(
  SET_NOTIFICATION_MESSAGE,
  props<{ notificationType: string, notificationMessage: string }>()
);
