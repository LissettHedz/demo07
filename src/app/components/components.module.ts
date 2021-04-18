import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent, 
    MainContainerComponent, 
    SideBarComponent, 
    BreadcrumbComponent, 
    NotificationsComponent, 
    SearchComponent, 
    UserComponent
  ],
  exports: [
    HeaderComponent, 
    MainContainerComponent, 
    SideBarComponent, 
    BreadcrumbComponent, 
    NotificationsComponent, 
    SearchComponent, 
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
