import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CateringComponent } from './catering.component';
import { OrderComponent } from './order/order.component';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import {MainRouting} from '../app.routes';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';
import {CateringService} from './catering.service';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRouting,
    SimpleNotificationsModule,
  SlimLoadingBarModule
  ],
  declarations: [CateringComponent, OrderComponent],
  exports:[CateringComponent],
  providers:[CateringService]
})
export class CateringModule { }
