import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Reminders } from "./reminders.component";

describe("Reminders", () => {
  let component: Reminders;
  let fixture: ComponentFixture<Reminders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reminders],
    }).compileComponents();

    fixture = TestBed.createComponent(Reminders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
