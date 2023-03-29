import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ReminderDialogComponent } from "src/app/core/components/reminders/reminder-dialog/reminder-dialog.component";
import { ReminderType } from "src/app/shared/models/Reminder";
import { REMINDERS_KEY } from "../../constants";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class RemindersService {
  reminders: ReminderType[] = [];

  constructor(
    public dialog: MatDialog,
    private localStorage: LocalStorageService
  ) {}

  edit(key: string, reminder: ReminderType) {
    const index = this.reminders.findIndex((v) => v.id === key);
    this.reminders[index] = reminder;
    this.setReminder(this.reminders);
  }

  create(reminder: ReminderType) {
    this.reminders.push(reminder);
    this.orderList();
    this.setReminder(this.reminders);
  }

  delete(key: string) {
    const index = this.reminders.findIndex((v) => v.id === key);
    this.reminders.splice(index, 1);
    this.setReminder(this.reminders);
  }

  getReminders(): ReminderType[] {
    this.localStorage.get(REMINDERS_KEY).subscribe((response) => {
      if (response !== null) {
        this.reminders = response;
        this.orderList();
      } else this.setReminder([]);
    });
    return this.reminders;
  }

  setReminder(list: ReminderType[]): void {
    this.localStorage.set(REMINDERS_KEY, list);
  }

  openDialog(dateReminder: Date, reminder?: ReminderType) {
    this.dialog.open(ReminderDialogComponent, {
      data: {
        date: dateReminder,
        reminder: reminder,
      },
      disableClose: true,
    });
  }

  orderList() {
    this.reminders?.sort(function (a, b) {
      return a.time.localeCompare(b.time);
    });
  }

  reminderOnDate(reminder: ReminderType, dateReminder: any): boolean {
    const date = new Date(reminder.date).getDate();
    const month = new Date(reminder.date).getMonth();
    const year = new Date(reminder.date).getFullYear();

    return (
      dateReminder.getDate() == date &&
      dateReminder.getMonth() == month &&
      dateReminder.getFullYear() == year
    );
  }
}
