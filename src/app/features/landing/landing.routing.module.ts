import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoggedInAuthGuard } from '@app/core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [LoggedInAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }