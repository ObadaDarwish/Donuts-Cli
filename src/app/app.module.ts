import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {MainRouting} from './app.routes';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ProductsModule} from './products/products.module';
import {CateringModule} from './catering/catering.module';
import {SimpleNotificationsModule} from 'angular2-notifications/src/simple-notifications.module';

@NgModule({
  declarations: [AppComponent,FooterComponent,HeaderComponent],
  imports: [BrowserModule, FormsModule, HttpModule,HomeModule,ProductsModule,CateringModule,SimpleNotificationsModule,MainRouting], /*import modules,Routes*/
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
