import { Component, Input, OnInit } from "@angular/core";
import { ReminderType } from "src/app/shared/models/Reminder";
import { Reminders } from "src/app/core/components/reminders/reminders.component";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  @Input() reminders: ReminderType[] = [];
  calendar: Date[] = [];
  today: Date = new Date();
  currentMonth: number = this.today.getMonth();
  daysOfWeek: String[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  ngOnInit(): void {
    this.createCalendar();
  }

  private createCalendar(month?: number): void {
    this.calendar = [];

    month = month ?? this.currentMonth;
    const year: number = this.today.getFullYear();

    const fstDay: number = 0;
    const lstDay: number = 6;

    const startDate = new Date(year, month, 1);
    while (startDate.getDay() !== fstDay) {
      startDate.setDate(startDate.getDate() - 1);
    }

    const endDate = new Date(year, month + 1, 0);
    while (endDate.getDay() !== lstDay) {
      endDate.setDate(endDate.getDate() + 1);
    }

    let date = new Date(startDate.getTime());
    for (date; date <= endDate; date.setDate(date.getDate() + 1)) {
      this.calendar.push(new Date(date.getTime()));
    }
  }

  changeMonth(offsetMes: number) {
    this.today.setMonth(this.today.getMonth() + offsetMes);
    this.today = new Date(this.today.getTime());
    this.createCalendar(this.today.getMonth());
  }
}
