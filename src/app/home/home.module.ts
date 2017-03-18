import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MainRouting}from '../app.routes';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {NotificationsService} from 'angular2-notifications/src/notifications.service';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    SimpleNotificationsModule,
    SlimLoadingBarModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent],
  providers:[NotificationsService]
})
export class HomeModule { }
