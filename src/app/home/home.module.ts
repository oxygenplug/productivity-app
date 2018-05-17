import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { HomeComponent } from "./home.component";
import { LoginMenuModule } from "./login-menu/login-menu.module";
import { SignupMenuModule } from "./signup-menu/signup-menu.module";
import { OxyModule } from '../oxy/oxy.module'
import { UserAuthService } from "./userAuth.service";
@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        MatButtonModule,
        CommonModule,
        OxyModule,
        LoginMenuModule,
        SignupMenuModule
    ],
    exports: [HomeComponent],
    providers: [UserAuthService]
})

export class HomeModule {}