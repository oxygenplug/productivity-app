import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { TimerComponent } from "./timer/timer.component";
import { HomeMenu } from "./home/home.component";
import { LoginMenuComponent } from "./login-menu/login-menu.component";
import { MatButtonModule, MatInputModule } from "@angular/material";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OxyModalComponent } from "./oxy-modal/oxy-modal.component";
import { SignupMenuComponent } from './signup-menu/signup-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    HomeMenu,
    LoginMenuComponent,
    OxyModalComponent,
    SignupMenuComponent
  ],
  // imports neccessary browser and routing modules, along with the needed material design component modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
