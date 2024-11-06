import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.scss']
})
export class AuthenticatedLayoutComponent {
  isCollapsed = false;
  screenWidth!: number;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() {
    // set screenWidth of navbar on screen size change
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }
}
