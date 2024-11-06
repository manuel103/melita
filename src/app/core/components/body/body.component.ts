import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isScreenSmall: boolean = false;
  isDarkTheme = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService
  ) { }

  getBodyClass(): string {
    let styleClass = '';

    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else {
      styleClass = 'body-md-screen'
    }

    return styleClass;
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isScreenSmall = result.matches;
      });
  }

  isSmallScreen(): boolean {
    return this.isScreenSmall;
  }
}
