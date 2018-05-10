import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TimerComponent } from './timer/timer.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    OptionsMenuComponent,
    LoginMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
