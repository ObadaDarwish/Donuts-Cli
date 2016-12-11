import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MainRouting}from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    MainRouting
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class HomeModule { }
