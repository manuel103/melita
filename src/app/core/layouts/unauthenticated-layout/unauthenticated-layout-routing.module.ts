import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthenticatedLayoutComponent } from './unauthenticated-layout.component';
import { LoginComponent } from '@app/features/dashboard/components/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: UnauthenticatedLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('@app/features/landing/landing.module').then(m => m.LandingModule)
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnauthenticatedRoutingModule { }