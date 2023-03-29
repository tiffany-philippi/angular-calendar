import { Component, Input } from "@angular/core";
import { ReminderType } from "src/app/shared/models/Reminder";
import { DetailsService } from "src/app/shared/services/details/details.service";
import { RemindersService } from "src/app/shared/services/reminders/reminders.service";

@Component({
  selector: "app-reminders",
  templateUrl: "./reminders.component.html",
  styleUrls: ["./reminders.component.scss"],
})
export class Reminders {
  @Input() dateReminder: Date = new Date();
  @Input() reminders: ReminderType[] = [];

  constructor(
    public rService: RemindersService,
    public dService: DetailsService
  ) {}

  openDialog() {
    this.rService.openDialog(this.dateReminder);
  }

  showDetails(reminder: ReminderType) {
    this.dService.setDetails([reminder]);
  }
}
