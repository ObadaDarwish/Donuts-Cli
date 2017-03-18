import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { DonutsComponent } from './donuts/donuts.component';
import { HotBeveragesComponent } from './hot-beverages/hot-beverages.component';
import { IceBeveragesComponent } from './ice-beverages/ice-beverages.component';
import {MainRouting} from '../app.routes';
import {productservice} from './productService';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';
import {NotificationsService} from 'angular2-notifications/src/notifications.service';
@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    SimpleNotificationsModule
  ],
  declarations: [ProductsComponent, DonutsComponent, HotBeveragesComponent, IceBeveragesComponent],
  exports:[ProductsComponent],
  providers : [productservice,NotificationsService]

})
export class ProductsModule { }
