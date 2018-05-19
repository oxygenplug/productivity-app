import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Task } from "./task";
import { TaskResponse } from "./task-response";
import { Title } from "@angular/platform-browser";

@Injectable()
export class TaskService {
  private basePath = "https://agile-taiga-82794.herokuapp.com";
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "x-auth": localStorage.getItem("token")
    // 'Access-Control-Allow-Origin': '*'
  });
  public testHello: string = "hi everyone";
  private currentId: number = 1;

  constructor(private httpClient: HttpClient) {}

  public getTasks() {
    return this.httpClient
      .get<{ tasks: TaskResponse[] }>(`${this.basePath}/tasks`, {
        headers: this.headers
      })
      .pipe(
        map(res => {
          let result: Task[] = [];
          res.tasks.forEach((item: TaskResponse) => {
            let task = this.convertToTask(item);
            result.push(task);
          });
          return result;
        })
      );
  }
  public createTask() {
    let newTask: Task = {
      title: "New Task",
      tags: "",
      text: "",
      completed: false,
      createdAt: null,
      dueDate: null,
      id: null
    };

    this.httpClient
      .post<TaskResponse>(
        `https://agile-taiga-82794.herokuapp.com/tasks`,
        newTask,
        {
          headers: this.headers
        }
      )
      .subscribe(res => {
        newTask.id = res._id;
        newTask.createdAt = new Date(res.createdAt);
      });
    return newTask;
  }

  public deleteTask(id: number) {
    this.httpClient.delete(`${this.basePath}/tasks/${id}`, {
        headers: this.headers
    }).subscribe();
  }

  
  public updateTask(task: Task) {
    this.httpClient.patch(`${this.basePath}/tasks/${task.id}`, {
        title: task.title,
        text: task.text,
        tags: task.tags,
        completed: task.completed,
        dueDate: task.dueDate
    },{
        headers: this.headers
    }).subscribe();
  }

  private convertToTask(taskRes: TaskResponse) {
      if(!taskRes.dueDate){
          taskRes.dueDate = new Date().toString();
      }
    let result: Task = {
      title: taskRes.title,
      text: taskRes.text,
      tags: taskRes.tags,
      completed: taskRes.completed,
      createdAt: new Date(taskRes.createdAt),
      dueDate: new Date(taskRes.dueDate),
      id: taskRes._id
    };
    return result;
  }
}
