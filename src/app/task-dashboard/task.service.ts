import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Task } from "./task";

@Injectable()
export class TaskService {
  private basePath: 'https://agile-taiga-82794.herokuapp.com'
  private tasks: Task[] = [];
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'x-auth',
    'Access-Control-Allow-Origin': '*'  
}) ;
public testHello: string = 'hi everyone'
  private currentId: number = 1;

  constructor(private httpClient: HttpClient) {}

  public getTasks() {
    return this.tasks;
  }
  public createTask() {
    let newTask = {
      title: "Task",
      text: '',
      tags: "default",
      completed: false,
      createdDate: new Date(Date.now()),
      dueDate: new Date(new Date().getTime() + Math.random() * 1000000),
      id: this.currentId++
    };
    this.tasks.push(newTask);
    this.httpClient.post<Task>(`${this.basePath}/tasks`,{newTask}, {
        headers: this.headers,
    } ).subscribe(res => {

    })  
    return newTask;
  }

  public deleteTask(id: number) {
    let index = this.tasks.findIndex(value => {
      return value.id == id;
    });

    this.tasks.splice(index, 1);
  }
}