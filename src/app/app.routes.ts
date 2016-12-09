/**
 * Created by ObadaDarwish on 01/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {CateringComponent} from './catering/catering.component';


const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Products', component:ProductsComponent},
  {path: 'Catering', component:CateringComponent},




];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);




