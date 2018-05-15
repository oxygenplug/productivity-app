import { Component, OnInit } from "@angular/core";
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule
} from "@angular/material";
import { Task } from "./task";

@Component({
  selector: "task-dashboard",
  templateUrl: "./task-dashboard.component.html",
  styleUrls: ["./task-dashboard.component.css"]
})
export class TaskDashboardComponent implements OnInit {
  public tasks: Task[] = [];

  constructor() {
    for (let i = 0; i < 6; i++) {
      this.tasks.push({
        title: "My First Task",
        priority: 1,
        tags: "default",
        completed: false,
        createdDate: new Date(Date.now()),
        dueDate: new Date(new Date().getTime() + (Math.random() * 1000000))
      });
    }
  }

  ngOnInit() {}
}
