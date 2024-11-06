import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../store';
import { setNotificationMessage } from '../store/actions/shared.actions';
import { logout } from '../store/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private userNameSubject = new BehaviorSubject<any>(null);
  private timeoutCountDownValueSubject = new BehaviorSubject<any>(null);
  private loggedInStateSubject = new BehaviorSubject<any>(null);
  private isAccessAllowedSubject = new BehaviorSubject<any>(null);

  constructor(private store: Store<AppState>) {}

  userName$ = this.userNameSubject.asObservable();
  timeoutCountDownValue$ = this.timeoutCountDownValueSubject.asObservable();
  loggedInState$ = this.loggedInStateSubject.asObservable();
  isAccessAllowedtate$ = this.isAccessAllowedSubject.asObservable();

  setName(name: any) {
    this.userNameSubject.next(name);
  }

  setTimeoutCountDownValue(value: number) {
    this.timeoutCountDownValueSubject.next(value);
  }

  setLoggedInState(isLoggedIn: boolean) {
    this.loggedInStateSubject.next(isLoggedIn);
  }

  setIsAccessAllowedState(isAccessAllowed: boolean) {
    this.isAccessAllowedSubject.next(isAccessAllowed);
  }

  handleErrorResponse(error: any) {
    switch (Number(error.status)) {
      case 500:
        this.store.dispatch(
          setNotificationMessage({
            notificationType: 'error',
            notificationMessage:
              'Internal server error occurred. Please try again later',
          }),
        );
        break;
      case 401:
        this.store.dispatch(logout());
        break;
      case 403:
        this.store.dispatch(logout());
        break;
      case 400:
        const errorMessage = error?.error.message;
        this.store.dispatch(
          setNotificationMessage({
            notificationType: 'error',
            notificationMessage: errorMessage,
          }),
        );
        break;
      case 404:
        const notFoundErrorMessage = error?.message;
        this.store.dispatch(
          setNotificationMessage({
            notificationType: 'error',
            notificationMessage: notFoundErrorMessage,
          }),
        );
        break;
      // default:
      //     this.store.dispatch(setNotificationMessage({ notificationType: "error", notificationMessage: "Something went wrong. Please try again later" }));
      //     break;
    }
  }
}
