import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressBarModule } from "@angular/material";
import { TaskCardComponent } from "../task-card/task-card.component";
import { FormsModule } from "@angular/forms";
import { TaskCardModule } from "../task-card/task-card.module";
@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatProgressBarModule,
    TaskCardModule
  ],
  exports: [TaskModalComponent],
  declarations: [TaskModalComponent],
  providers: []
})
export class TaskModalComponent {}
