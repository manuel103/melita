import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { FilledButtonComponent } from './components/filled-button/filled-button.component';
import { BorderButtonComponent } from './components/border-button/border-button.component';

@NgModule({
  declarations: [
    ActionButtonComponent,
    FilledButtonComponent,
    BorderButtonComponent
  ],
  imports: [
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    CommonModule
  ],
  exports: [
    ActionButtonComponent,
    FilledButtonComponent,
    BorderButtonComponent
  ]
})
export class SharedModule { }