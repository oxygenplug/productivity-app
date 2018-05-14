import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { OxyModalComponent } from "./oxy-modal.component";

@NgModule({
    declarations: [
        OxyModalComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        CommonModule,
    ],
    exports: [OxyModalComponent]
})

export class OxyModalModule {}