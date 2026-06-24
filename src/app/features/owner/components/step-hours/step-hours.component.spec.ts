import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHoursComponent } from './step-hours.component';

describe('StepHoursComponent', () => {
  let component: StepHoursComponent;
  let fixture: ComponentFixture<StepHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
