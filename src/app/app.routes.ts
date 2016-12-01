/**
 * Created by ObadaDarwish on 01/12/2016.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LearnMoreComponent} from './learn-more/learn-more.component'
import {HomeComponent} from './home/home.component';
const MainRoute: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'LearnMore', component: LearnMoreComponent},

];


export const MainRouting: ModuleWithProviders = RouterModule.forRoot(MainRoute);




