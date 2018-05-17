import { NgModule, Input, Output, EventEmitter, Component } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatButtonModule, MatInputModule } from "@angular/material";
import { TaskCardComponent } from "../../task-card/task-card.component";
import { FormsModule } from "@angular/forms";
import { OxyModalComponent } from "../../../oxy/modal/oxy-modal.component";
import { Task } from "../../task";

@Component({
  selector: "task-modal",
  templateUrl: "./task-modal.component.html",
  styleUrls: ["../../../oxy/modal/oxy-modal.component.css", "./task-modal.component.css"]
})

export class TaskModalComponent extends OxyModalComponent {
  @Input() task: Task;
  @Output() taskChange: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() delete: EventEmitter<void> = new EventEmitter();
  
  public deleteTask() {
      this.delete.emit();
  }
}
