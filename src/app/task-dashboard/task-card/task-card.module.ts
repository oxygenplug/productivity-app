import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule } from "@angular/material";
import { TaskCardComponent } from "./task-card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CommonModule
  ],
  exports: [TaskCardComponent],
  declarations: [TaskCardComponent],
  providers: []
})
export class TaskCardModule {}
