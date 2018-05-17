import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from "@angular/core";
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
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  public isModalShowing: boolean = false;
  public isCardShowing: boolean = false;
  public progressColor: string;
  public elapsedPercentage: number = 100;
  private timer: Observable<number> = timer(1000, 1000);
  private timerSubscriber: Subscription;
  constructor() {
    // sets timerSubscriber to the entire time calculation to make it easier to stop the timer
    this.timerSubscriber = this.timer.subscribe(() => {
      // calculates the due date time in seconds
      let dueDateSeconds = this.getTotalSeconds(this.task.dueDate);
      // gets the total seconds since task creation
      let createdDateSeconds = this.getTotalSeconds(this.task.createdDate);
      let currentDateSeconds = this.getTotalSeconds(new Date());
      let difference = dueDateSeconds - createdDateSeconds;
      let timeElapsed = currentDateSeconds - createdDateSeconds;
      // calculates the time remaining into a percentage so the value is easily transferred to the material progress bar
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

  public onCardClick(event: Event, card: HTMLElement) {
    if(event.target === card) {
        this.isModalShowing = true;
    }
  }

  public deleteTask() {
      this.delete.emit(this.task.id);
      }
}
