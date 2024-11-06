import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/dashboard/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/unauth/login', pathMatch: 'full'
  },
  {
    path: 'app', redirectTo: '/app/dashboard', pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('@app/core/layouts/authenticated-layout/authenticated-layout.module').then(m => m.AuthenticatedLayoutModule)
  },
  {
    path: 'unauth',
    loadChildren: () => import('@app/core/layouts/unauthenticated-layout/unauthenticated-layout.module').then(m => m.UnauthenticatedModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
