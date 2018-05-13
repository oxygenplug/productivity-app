import { Component, OnInit } from '@angular/core';
import {MatCardModule, MatButtonModule, MatInputModule} from '@angular/material';
import { Task } from "./task";

@Component({
  selector: 'task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {

    public task: Task = {
        title: 'My First Task',
        priority: 1,
        tags: 'default',
        completed: false,
        createdDate: new Date(Date.now()),
        dueDate: new Date(Date.now() + 5000)
    }

  constructor() { }

  ngOnInit() {
  }

}


