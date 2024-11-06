import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SharedService } from "../services/shared.service";


export const LoggedInAuthGuard: CanActivateFn = () => {
    const router = inject(Router);
    const sharedService = inject(SharedService);

    sharedService.loggedInState$.subscribe((isLoggedIn) => {
        if (isLoggedIn) {
            router.navigate(["/app/dashboard"]);
        }
    });
    return true;
}