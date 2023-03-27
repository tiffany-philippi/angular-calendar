import { Component, OnInit } from "@angular/core";
import { ReminderType } from "src/app/shared/models/Reminder";
import { RemindersService } from "./shared/services/reminders/reminders.service";

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
  constructor(public rService: RemindersService) {}

  ngOnInit(): void {
    this.reminders = this.rService.getReminders();
  }
}
