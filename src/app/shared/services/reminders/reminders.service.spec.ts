import { TestBed } from "@angular/core/testing";

import { RemindersService } from "./reminders.service";

describe("LocalStorageService", () => {
  let service: RemindersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemindersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
