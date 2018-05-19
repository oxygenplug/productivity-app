import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "datetime-picker",
  styleUrls: ["datetime-picker.component.css"],
  templateUrl: "datetime-picker.component.html"
})
export class DateTimePickerComponent implements OnInit {
  @Input() dateTime: Date = new Date();
  @Output() dateTimeChange: EventEmitter<Date> = new EventEmitter();
  @Input() isShowing: boolean = false;
  @Output() isShowingChange: EventEmitter<boolean> = new EventEmitter();
  private moment: moment.Moment;
  private date: Date;
  private time: string;
  private mDivider: MDivider;

  constructor() {}

  ngOnInit() {
    if (!this.dateTime) this.dateTime = new Date();
    this.date = this.dateTime;
    this.moment = moment(this.dateTime);
    this.time = this.moment.format("h:mm");
    if (this.moment.format("A") == "AM") {
      this.mDivider = MDivider.AM;
    } else {
      this.mDivider = MDivider.PM;
    }
  }

  public changeTime(time: string) {
    this.time = time;
    this.dateTimeChanged();
  }

  /**
   * changeDate
   */
  public changeDate(date: Date) {
    this.date = date;
    this.dateTimeChanged();
  }

  /**
   * changeMDivider
   */
  public changeMDivider(mDivider: MDivider) {
    this.mDivider = mDivider;
    this.dateTimeChanged();
  }

  private dateTimeChanged() {
    if (!this.date || !this.time) return;
    let mDividerString: string;
    let hour: number;
    let minutes: number;
    let splitTime = this.time.split(":");
    let hourString = splitTime[0];
    let minutesString = splitTime[1];
    minutes = parseInt(minutesString);
      hour = parseInt(hourString);
    if (this.mDivider == MDivider.PM) {

      
      hour += 12;
    }

    let dateString = this.date.toISOString().substring(0, 10);
    this.dateTime = moment(`${dateString} ${hour}:${minutes}`).toDate();
  }

  public blur() {
        this.isShowing = false;
        this.isShowingChange.emit(this.isShowing);
        this.dateTimeChange.emit(this.dateTime);
  }      
}

enum MDivider {
  AM = 0,
  PM = 1
}
