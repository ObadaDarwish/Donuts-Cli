import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MainRouting} from '../app.routes';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    SlimLoadingBarModule
  ],
  declarations: [HeaderComponent],
  exports:[HeaderComponent]
})
export class HeaderModule { }
