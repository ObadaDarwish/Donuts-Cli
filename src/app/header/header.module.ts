import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MainRouting} from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    MainRouting
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModule { }
