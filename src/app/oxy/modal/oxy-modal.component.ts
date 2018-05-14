import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "oxy-modal",
  templateUrl: "./oxy-modal.component.html",
  styleUrls: ["./oxy-modal.component.css"]
})
export class OxyModalComponent implements OnInit {
  @Input() isShowing: boolean = false;
  @Output() isShowingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  // closes the modal based on the state of isShowing
  public close(): void {
    this.isShowing = false;
    this.isShowingChange.emit(this.isShowing);
  }
}
