import { Input, Output, EventEmitter, Component } from "@angular/core";
import { OxyModalComponent } from "../../../oxy/modal/oxy-modal.component";
import { Task } from "../../task";
import { TaskService } from "../../task.service";

@Component({
  selector: "task-modal",
  templateUrl: "./task-modal.component.html",
  styleUrls: ["../../../oxy/modal/oxy-modal.component.css", "./task-modal.component.css"]
})

export class TaskModalComponent extends OxyModalComponent {
  @Input() task: Task;
  @Output() taskChange: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() delete: EventEmitter<void> = new EventEmitter();
  

  constructor(private taskService: TaskService){
      super();
  }
  public deleteTask() {
      this.delete.emit();
  }

  public updateTask(){
    this.taskService.updateTask(this.task);
}
}
