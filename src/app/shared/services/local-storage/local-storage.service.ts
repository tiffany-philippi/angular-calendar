import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ReminderType } from "src/app/shared/models/Reminder";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, reminder: ReminderType[]) {
    this.storage.setItem(key, JSON.stringify(reminder));
  }

  get(key: string): Observable<ReminderType[]> {
    return of(JSON.parse(this.storage.getItem(key) as string));
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}
