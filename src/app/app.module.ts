import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TimerComponent } from './timer/timer.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    OptionsMenuComponent,
    LoginMenuComponent
  ],
  // imports neccessary browser and routing modules, along with the needed material design component modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
