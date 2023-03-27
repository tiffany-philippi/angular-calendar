import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ReminderType } from "src/app/shared/models/Reminder";
import { RemindersService } from "src/app/shared/services/reminders/reminders.service";
import { ReminderDialogComponent } from "./reminder-dialog/reminder-dialog.component";

@Component({
  selector: "app-reminders",
  templateUrl: "./reminders.component.html",
  styleUrls: ["./reminders.component.scss"],
})
export class Reminders {
  @Input() dateReminder: Date = new Date();
  @Input() reminders: ReminderType[] = [];

  constructor(public dialog: MatDialog, public rService: RemindersService) {}

  openDialog(reminder?: ReminderType) {
    this.dialog.open(ReminderDialogComponent, {
      data: {
        date: this.dateReminder,
        reminder: reminder,
      },
      disableClose: true,
    });
  }
}
