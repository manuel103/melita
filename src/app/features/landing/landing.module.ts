import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { LogoutComponent } from './pages/logout/logout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [
        LogoutComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    exports: []
})
export class LandingModule { }