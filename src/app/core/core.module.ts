import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { UnauthenticatedLayoutComponent } from './layouts/unauthenticated-layout/unauthenticated-layout.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { StoreModule } from '@ngrx/store';
// import * as fromUsersReducers from '@app/features/users/state/users/users.reducers';
import { EffectsModule } from '@ngrx/effects';
// import { UserEffects } from '@app/features/users/state/users/users.effects';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
    declarations: [
        BodyComponent,
        SidenavComponent,
        HeaderComponent,
        AuthenticatedLayoutComponent,
        UnauthenticatedLayoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatInputModule,
        MatRippleModule,
        MatCardModule,
        MatExpansionModule,
        SharedModule,
        // EffectsModule.forFeature([UserEffects]),
        // StoreModule.forFeature(fromUsersReducers.userPermissionsFeatureKey, fromUsersReducers.getUserPermissionsReducer)
    ],
    exports: [
        BodyComponent,
        HeaderComponent
    ]
})
export class CoreModule { }