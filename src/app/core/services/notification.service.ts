import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    private verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor(
        public snackBar: MatSnackBar
    ) { }

    showSuccessNotification(message = "") {
        this.snackBar.open(message, '',
            {
                duration: 3000, horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition, panelClass: ['green-snackbar'],
            });
    }

    showErrorNotification(message = "") {
        this.snackBar.open(message, '',
            {
                duration: 3000, horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition, panelClass: ['red-snackbar'],
            });
    }

    showWarningNotification(message = "") {
        this.snackBar.open(message, '',
            {
                duration: 3000, horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition, panelClass: ['yellow-snackbar'],
            });
    }
}
