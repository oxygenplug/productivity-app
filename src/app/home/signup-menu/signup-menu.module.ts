import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressBarModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { SignupMenuComponent } from "./signup-menu.component";

@NgModule({
    declarations: [
        SignupMenuComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        CommonModule,],
    exports: [SignupMenuComponent]
})

export class SignupMenuModule {}