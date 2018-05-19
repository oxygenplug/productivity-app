import { Component, OnInit } from "@angular/core";
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
} from "@angular/material";
import { Task } from "./task";
import { TaskService } from "./task.service";

@Component({
  selector: "task-dashboard",
  templateUrl: "./task-dashboard.component.html",
  styleUrls: ["./task-dashboard.component.css"]
})
export class TaskDashboardComponent implements OnInit {
  public tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  public createTask() {
    let newTask = this.taskService.createTask();
    this.tasks.push(newTask);
    // this.tasks.push(newTask);
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id);
    let index = this.tasks.findIndex(value => {
      return value.id == id;
    });
    this.tasks.splice(index, 1);
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(res => {
      this.tasks = res;
    });
  }
}
