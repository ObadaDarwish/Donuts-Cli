import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LearnMoreModule } from './learn-more/learn-more.module';
import { HomeModule } from './home/home.module';
import {MainRouting} from './app.routes';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
@NgModule({
  declarations: [AppComponent,FooterComponent,HeaderComponent],
  imports: [BrowserModule, FormsModule, HttpModule,LearnMoreModule,HomeModule,MainRouting], /*import modules,Routes*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
