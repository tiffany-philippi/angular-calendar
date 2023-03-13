import { Component, OnInit } from "@angular/core";
import { ReminderType } from "src/models/Reminder";
import { LocalStorageService } from "./local-storage.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Welcome! Let's check your schedule.";
  hour: string = String(new Date().getHours()).padStart(2, "0");
  minutes: string = String(new Date().getMinutes()).padStart(2, "0");

  reminders: ReminderType[] = [];
  item: ReminderType[] = [
    {
      id: "0",
      description: "Evaluate Tiffany's test",
      color: "#e39cb7",
      date: new Date(),
      time: `${this.hour}:${this.minutes}`,
    },
  ];
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.getReminders();
  }

  getReminders() {
    this.localStorage.get("reminders").subscribe((r) => {
      if (r !== null) {
        this.reminders = r;
        this.orderList();
      } else {
        this.setReminder(this.item);
      }
    });
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
