import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { hideSpinner, showSpinner } from '../store/actions/shared.actions';


@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    constructor(
        public store: Store<AppState>
    ) { }

    show() {
        this.store.dispatch(showSpinner());
    }

    hide() {
        this.store.dispatch(hideSpinner());
    }
}