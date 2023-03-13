import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ReminderType } from "src/models/Reminder";
import { LocalStorageService } from "../local-storage.service";
import { ReminderDialogComponent } from "./reminder-dialog/reminder-dialog.component";

@Component({
  selector: "app-reminders",
  templateUrl: "./reminders.component.html",
  styleUrls: ["./reminders.component.scss"],
})
export class Reminders implements OnInit {
  @Input() dateReminder: Date = new Date();
  @Input() reminders: ReminderType[] = [];

  constructor(
    public dialog: MatDialog,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {}

  openDialog(reminder?: ReminderType) {
    const dialogRef = this.dialog.open(ReminderDialogComponent, {
      data: {
        date: this.dateReminder,
        reminder: reminder,
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        if (reminder) {
          let index = this.reminders.findIndex(
            (value) => value.id == reminder.id
          );

          // DELETE
          if (response.length && response[0] == "delete")
            this.reminders.splice(index, 1);
          else this.reminders[index] = response;
        } else {
          this.reminders.push(response);
          this.orderList();
        }
      }

      this.setReminder(this.reminders);
    });
  }

  reminderOnDate(reminder: ReminderType): boolean {
    const date = new Date(reminder.date).getDate();
    const month = new Date(reminder.date).getMonth();

    if (
      this.dateReminder.getDate() == date &&
      this.dateReminder.getMonth() == month
    )
      return true;

    return false;
  }

  orderList() {
    this.reminders?.sort(function (a, b) {
      return a.time.localeCompare(b.time);
    });
  }

  setReminder(list: ReminderType[]): void {
    this.localStorage.set("reminders", list);
  }
}
