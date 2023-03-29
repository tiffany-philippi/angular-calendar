import { Component, ChangeDetectorRef } from "@angular/core";
import { ReminderType } from "src/app/shared/models/Reminder";
import { DetailsService } from "src/app/shared/services/details/details.service";
import { RemindersService } from "src/app/shared/services/reminders/reminders.service";

@Component({
  selector: "app-next-event",
  templateUrl: "./next-event.component.html",
  styleUrls: ["./next-event.component.scss"],
})
export class NextEventComponent {
  details: ReminderType;

  constructor(
    public dService: DetailsService,
    public rService: RemindersService,
    private cdr: ChangeDetectorRef
  ) {
    this.details = dService.details;
  }

  showDiv(): boolean {
    this.details = this.dService.getReminderDetails();
    return this.details !== undefined;
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
