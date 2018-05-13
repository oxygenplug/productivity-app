import { Component, OnInit, Input } from "@angular/core";
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import { Task } from "../task";
import { timer } from "rxjs/observable/timer";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.css"]
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task;
  public elapsedPercentage: number;
  private timer: Observable<number> = timer(1000, 1000);
  constructor() {
    this.timer.subscribe(() => {
      let dueDateSeconds = this.getTotalSeconds(this.task.dueDate);
      let createdDateSeconds = this.getTotalSeconds(this.task.createdDate);
      let currentDateSeconds = this.getTotalSeconds(new Date());
      let difference = dueDateSeconds - createdDateSeconds;
      let timeElapsed =
       currentDateSeconds - createdDateSeconds;
      this.elapsedPercentage = Math.abs(timeElapsed / difference - 100);
      console.log(this.elapsedPercentage);
    });
  }

  ngOnInit() {}

  private getTotalSeconds(date: Date): number {
    return date.getTime() / 1000;
  }
}
