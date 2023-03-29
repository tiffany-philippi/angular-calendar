import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ReminderType } from "src/app/shared/models/Reminder";
import * as uuid from "uuid";
import { RemindersService } from "src/app/shared/services/reminders/reminders.service";

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
    public rService: RemindersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.reminder = this.data.reminder;
  }

  ngOnInit(): void {
    this.reminderForm = this.fb.group({
      id: this.reminder?.id ?? uuid.v4(),
      description: [
        this.reminder?.description,
        [Validators.required, Validators.maxLength(30)],
      ],
      color: [this.reminder?.color || "#9cb7e3"],
      date: [this.reminder?.date || this.data.date],
      time: [this.reminder?.time || `${this.hour}:${this.minutes}`],
    });
  }
  delete(id: string) {
    this.rService.delete(id);
    this.close();
  }
  close(): void {
    this.dialogRef.close();
  }
  submit() {
    if (this.reminderForm.status === "INVALID") return;
    else {
      const reminder = this.reminderForm.value;

      if (this.reminder?.id) this.rService.edit(this.reminder.id, reminder);
      else this.rService.create(reminder);

      this.close();
    }
  }
}
