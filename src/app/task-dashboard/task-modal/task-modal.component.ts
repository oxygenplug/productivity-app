import { NgModule, Input, Output, EventEmitter, Component } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressBarModule } from "@angular/material";
import { TaskCardComponent } from "../task-card/task-card.component";
import { FormsModule } from "@angular/forms";
import { TaskCardModule } from "../task-card/task-card.module";
import { OxyModule } from "../../oxy/oxy.module";

@Component({
  selector: "task-modal",
  templateUrl: "./task-modal.component.html",
  styleUrls: ["./task-modal.component.css"]
})

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatProgressBarModule,
    TaskCardModule,
    OxyModule
  ],
  exports: [TaskModalComponent],
  declarations: [TaskModalComponent],
  providers: []
})
export class TaskModalComponent {
  
}
