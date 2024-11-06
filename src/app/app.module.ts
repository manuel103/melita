import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './core/store';
import { environment } from 'environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NgxSpinnerModule } from "ngx-spinner";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxSpinnerModule,
    MatSnackBarModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), connectInZone: true }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ connectInZone: true }) : [],
    // EffectsModule.forRoot([AuthEffects]),

    StoreRouterConnectingModule.forRoot()
  ],
  // providers: [
  //     { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  //     { provide: MatDialogRef, useValue: {} },
  //     provideHttpClient(withInterceptorsFromDi()),
  //   ]
})
export class AppModule { }
