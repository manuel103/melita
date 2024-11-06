import { Component, OnInit } from '@angular/core';
import { fadeInOut, rotate } from '@app/core/utils/animations';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store';
import { Subscription } from 'rxjs';
import { Features } from './nav-features';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInOut, rotate]
})
export class SidenavComponent implements OnInit {

  collapsed = false;
  isScreenSmall: boolean = false;
  isDarkTheme = false;
  menuItems: any[] = [];
  step = 0;
  filteredMenuItems: any[] = [];
  userPermissionsSubscription!: Subscription;

  setStep(index: number) {
    this.step = index;
  }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.getUserPermissions();
  }

  // getUserPermissions() {
  //   this.userPermissionsSubscription = this.store.select(selectUserPermissions).subscribe((data: any) => {
  //     this.filterMenuItems(data?.role?.permissions);
  //   });
  // }

  // // Filter menu items based on 'view' permission
  // filterMenuItems(permissions: any) {
  //   this.filteredMenuItems = Features.filter(feature => {
  //     if (permissions) {

  //       const userPermission = permissions.find((permission: any) => permission.feature === feature.label);

  //       if (userPermission && userPermission.allowedActions && userPermission.allowedActions.includes('view')) {
  //         return true;
  //       }

  //       if (feature.children) {
  //         feature.children = feature.children.filter(child => {
  //           const childPermission = userPermission?.children?.find((permission: any) => permission.feature === child.label);
  //           return childPermission && childPermission.allowedActions && childPermission.allowedActions.includes('view');
  //         });
  //         return feature.children.length > 0;
  //       }
  //     }

  //     return false;
  //   });
  // }

  isCollapsed(): boolean {
    return this.collapsed;
  }

  isSmallScreen(): boolean {
    return this.isScreenSmall;
  }

  ngOnDestroy(): void {
    if (this.userPermissionsSubscription) {
      this.userPermissionsSubscription.unsubscribe();
    }
  }
}
