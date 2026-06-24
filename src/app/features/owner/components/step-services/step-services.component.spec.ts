import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepServicesComponent } from './step-services.component';

describe('StepServicesComponent', () => {
  let component: StepServicesComponent;
  let fixture: ComponentFixture<StepServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
