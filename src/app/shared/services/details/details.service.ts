import { Injectable } from "@angular/core";
import { DETAILS_KEY } from "../../constants";
import { ReminderType } from "../../models/Reminder";
import { LocalStorageService } from "../local-storage/local-storage.service";

@Injectable({
  providedIn: "root",
})
export class DetailsService {
  details = {
    id: "",
    description: "",
    time: "",
    date: new Date(),
    color: "",
  };

  constructor(private localStorage: LocalStorageService) {}

  getReminderDetails(): ReminderType {
    this.localStorage.get(DETAILS_KEY).subscribe((response) => {
      if (response !== null) {
        this.details = response[0];
      } else this.setDetails([]);
    });
    return this.details;
  }

  setDetails(reminder: ReminderType[]): void {
    this.localStorage.set(DETAILS_KEY, reminder);
  }

  clear(): void {
    this.localStorage.remove(DETAILS_KEY);
  }
}
