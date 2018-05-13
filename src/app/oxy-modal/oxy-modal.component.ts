import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "oxy-modal",
  templateUrl: "./oxy-modal.component.html",
  styleUrls: ["./oxy-modal.component.css"]
})
export class OxyModalComponent implements OnInit {
  @Input() isShowing: boolean = false;

  constructor() {}

  ngOnInit() {}

  public close(): void {
      this.isShowing = false;
  }
}
