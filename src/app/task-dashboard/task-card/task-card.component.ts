import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule
} from "@angular/material";
import { Task } from "../task";
import { timer } from "rxjs/observable/timer";
import { Observable, Subscription, Subscriber } from "rxjs";

@Component({
  selector: "task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task;
  public progressColor: string;
  public elapsedPercentage: number;
  private timer: Observable<number> = timer(1000, 1000);
  private timerSubscriber: Subscription;
  constructor() {
    this.timerSubscriber = this.timer.subscribe(() => {
      let dueDateSeconds = this.getTotalSeconds(this.task.dueDate);
      let createdDateSeconds = this.getTotalSeconds(this.task.createdDate);
      let currentDateSeconds = this.getTotalSeconds(new Date());
      let difference = dueDateSeconds - createdDateSeconds;
      let timeElapsed = currentDateSeconds - createdDateSeconds;
      this.elapsedPercentage = Math.ceil((-(timeElapsed / difference) * 100 ) + 100);
      if (this.elapsedPercentage < 0) {
        this.timerSubscriber.unsubscribe();
      }
    });
  }

  ngOnInit() {
      console.log(this.task.dueDate)
  }

  private getTotalSeconds(date: Date): number {
    return date.getTime() / 1000;
  }
}
