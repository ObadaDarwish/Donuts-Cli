import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { DonutsComponent } from './donuts/donuts.component';
import { HotBeveragesComponent } from './hot-beverages/hot-beverages.component';
import { IceBeveragesComponent } from './ice-beverages/ice-beverages.component';
import {MainRouting} from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    MainRouting

  ],
  declarations: [ProductsComponent, DonutsComponent, HotBeveragesComponent, IceBeveragesComponent],
  exports:[ProductsComponent]
})
export class ProductsModule { }
