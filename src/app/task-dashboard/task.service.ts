import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Task } from "./task";

@Injectable()
export class TaskService {
  public tasks: Task[] = [];

  public currentId: number = 1;

  constructor(private httpClient: HttpClient) {}

  public getTasks() {
    return this.tasks;
  }
  public createTask() {
    {
      let newTask = {
        title: "Task",
        priority: 1,
        tags: "default",
        completed: false,
        createdDate: new Date(Date.now()),
        dueDate: new Date(new Date().getTime() + Math.random() * 1000000),
        id: this.currentId++
      };
      this.tasks.push(newTask);
      return newTask;
    }
  }

  public deleteTask(id: number) {
    let index = this.tasks.findIndex(value => {
      return value.id == id;
    });

    this.tasks.splice(index, 1);
  }
}
