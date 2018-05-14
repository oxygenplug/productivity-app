import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TaskDashboardModule } from "./task-dashboard/task-dashboard.module";
import { TaskCardModule } from "./task-dashboard/task-card/task-card.module";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app-routes";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  // imports neccessary browser and routing modules, along with the needed material design component modules
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TaskDashboardModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
