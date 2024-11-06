import { Component, Input, OnInit, inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { fadeInOut } from '@app/core/utils/animations';
import { ThemeService } from '@app/core/services/theme.service';
import { SharedService } from '@app/core/services/shared.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store';
import { logout } from '@app/core/store/actions/auth.actions';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeInOut]
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  @Input() notificationSidenav!: MatSidenav;

  private themeManager = inject(ThemeService);
  private sharedService = inject(SharedService);
  private store = inject(Store<AppState>);

  theme = this.themeManager.theme;
  userName = "";

  logoSrc!: string;

  ngOnInit() {
    this.setLogoSrc();
    this.sharedService.userName$.subscribe((name) => { this.userName = name; });
  }

  setLogoSrc() {
    if (this.theme() === 'dark') {
      this.logoSrc = '/assets/images/logo.png';
    } else {
      this.logoSrc = '/assets/images/logo.svg';
    }
  }

  toggleTheme() {
    this.themeManager.toggleTheme();
    this.setLogoSrc();
  }

  logout() {
    this.store.dispatch(logout());
  }
}
