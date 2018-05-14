import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressBarModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { LoginMenuComponent } from "./login-menu.component";

@NgModule({
    declarations: [
        LoginMenuComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        CommonModule,],
    exports: [LoginMenuComponent]
})

export class LoginMenuModule {}