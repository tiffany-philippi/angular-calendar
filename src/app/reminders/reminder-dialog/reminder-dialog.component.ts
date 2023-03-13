import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ReminderType } from "src/models/Reminder";
import * as uuid from "uuid";

@Component({
  selector: "app-reminder-dialog",
  templateUrl: "./reminder-dialog.component.html",
  styleUrls: ["./reminder-dialog.component.scss"],
})
export class ReminderDialogComponent {
  reminderForm: any;
  reminder: ReminderType;
  hour: String = String(new Date().getHours()).padStart(2, "0");
  minutes: String = String(new Date().getMinutes()).padStart(2, "0");

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReminderDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reminder = this.data.reminder;
  }

  ngOnInit(): void {
    this.reminderForm = this.fb.group({
      id: this.reminder?.id ?? uuid.v4(),
      description: [this.reminder?.description],
      color: [this.reminder?.color || "#9cb7e3"],
      date: [this.reminder?.date || this.data.date],
      time: [this.reminder?.time || `${this.hour}:${this.minutes}`],
    });
  }
  delete(id: string) {
    return ["delete", id];
  }
  close(): void {
    this.dialogRef.close();
  }
  disabled() {
    return !this.reminder;
  }
}
