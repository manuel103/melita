import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { BehaviorSubject, Observable, Subscription, take, tap } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { UserActions } from '@app/features/users/state/users/users.actions';
import { selectUserPermissions } from '@app/features/users/state/users/users.selectors';

@Injectable({
    providedIn: 'root'
})
export class PermissionService implements OnDestroy {
    private userPermissionsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public userPermissions$: Observable<any[]> = this.userPermissionsSubject.asObservable();
    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store<AppState>,
        private actions$: Actions
    ) {
        this.getUserPermissions();
    }

    getUserPermissions() {
        this.subscriptions.push(this.store.select(selectUserPermissions).subscribe((data: any) => {
            this.userPermissionsSubject.next(data?.role?.permissions);
        }));
    }

    hasPermissionForAction(featureName: string, action: string): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            this.userPermissions$.subscribe((userPermissions) => {

                if (userPermissions && userPermissions?.length > 0) {
                    const userPermission = userPermissions.find(permission => {
                        return permission.feature === featureName ||
                            (permission.children && permission.children.some((child: any) => child.feature === featureName));
                    });

                    if (userPermission) {
                        if (userPermission.allowedActions && userPermission.allowedActions.includes(action)) {
                            observer.next(true);
                        } else if (userPermission.children) {
                            const childPermission = userPermission.children.find((child: any) => child.feature === featureName);
                            if (childPermission && childPermission.allowedActions && childPermission.allowedActions.includes(action)) {
                                observer.next(true);
                            } else {
                                observer.next(false);
                            }
                        } else {
                            observer.next(false);
                        }
                    } else {
                        observer.next(false);
                    }
                } else {
                    if (userPermissions?.length <= 0) {
                        observer.next(false);
                    }

                    this.subscriptions.push(this.actions$.pipe(
                        ofType(UserActions.loadUserPermissionsSuccess),
                        take(1),
                        tap(() => {
                            if (userPermissions === undefined) {
                                observer.next(false);
                            }
                        })
                    ).subscribe());

                    this.subscriptions.push(this.actions$.pipe(
                        ofType(UserActions.loadUserPermissionsFailure),
                        take(1),
                        tap(() => {
                            observer.next(false);
                        })
                    ).subscribe());
                }
            });
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
