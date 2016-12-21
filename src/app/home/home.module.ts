import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MainRouting}from '../app.routes';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    SimpleNotificationsModule
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
