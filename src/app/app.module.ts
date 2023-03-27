import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./core/components/calendar/calendar.component";
import { Reminders } from "./core/components/reminders/reminders.component";
import { ReminderDialogComponent } from "./core/components/reminders/reminder-dialog/reminder-dialog.component";
import { NextEventComponent } from "./core/components/next-event/next-event.component";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    Reminders,
    ReminderDialogComponent,
    NextEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
