/**
 * Created by ObadaDarwish on 01/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {CateringComponent} from './catering/catering.component';
import {DonutsComponent} from './products/donuts/donuts.component';
import {HotBeveragesComponent} from './products/hot-beverages/hot-beverages.component';
import {IceBeveragesComponent} from './products/ice-beverages/ice-beverages.component';


const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},

  // products
  {
    path: 'Products', component: ProductsComponent,
    children: [
      {path: '', redirectTo: 'Donuts', pathMatch: 'full'},
      {path: 'Donuts', component: DonutsComponent},
      {path: 'HotBeverage', component: HotBeveragesComponent},
      {path: 'IceBeverage', component: IceBeveragesComponent}
    ]
  },

  // catering route

  {path: 'Catering', component: CateringComponent},


];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);




