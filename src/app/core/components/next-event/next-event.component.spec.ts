import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEventComponent } from './next-event.component';

describe('NextEventComponent', () => {
  let component: NextEventComponent;
  let fixture: ComponentFixture<NextEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
