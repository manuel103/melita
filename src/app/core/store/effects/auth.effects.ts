import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Subject, filter, takeUntil, tap } from 'rxjs';
import * as authActions from '../actions/auth.actions';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { SharedService } from '@app/core/services/shared.service';
import { InteractionStatus } from '@azure/msal-browser';

@Injectable()
export class AuthEffects {
    private readonly _destroying$ = new Subject<void>();

    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        tap(() => {
            this.msalService.instance.enableAccountStorageEvents();

            this.msalBroadcastService.inProgress$
                .pipe(
                    filter((status: InteractionStatus) => status === InteractionStatus.None),
                    takeUntil(this._destroying$)
                )
                .subscribe(() => {
                    this.checkAndSetActiveAccount();
                });
        })
    ), { dispatch: false });

    checkAndSetActiveAccount() {
        /**
             * If no active account is set but there are accounts signed in, sets first account to active account
             * To use active account set here, subscribe to inProgress$ first in your component
             * Note: Basic usage implemented. Complicated account selection logic may be required
         */

        // Check if there is an active account
        const activeAccount = this.msalService.instance.getActiveAccount();

        // If there is an active account, the user is logged in
        if (activeAccount) {
            this.sharedService.setName(activeAccount.name);
            this.sharedService.setLoggedInState(true);
        } else {
            // If there is no active account but there are accounts signed in, set the first account as active
            const accounts = this.msalService.instance.getAllAccounts();

            if (accounts.length > 0) {
                // We may be required to implement a more sophisticated logic for account selection here
                this.msalService.instance.setActiveAccount(accounts[0]);
                this.sharedService.setName(accounts[0].name);
                this.sharedService.setLoggedInState(true);
            } else {
                // If there are no accounts signed in, the user is logged out
                this.sharedService.setLoggedInState(false);
            }
        }
    }

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.logout),
        tap(() => {
            const account = this.msalService.instance.getActiveAccount();
            this.msalService.logoutRedirect({ account: account });
            this.sharedService.setLoggedInState(false);
        })
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private msalService: MsalService,
        private sharedService: SharedService,
        private msalBroadcastService: MsalBroadcastService
    ) { }
}
