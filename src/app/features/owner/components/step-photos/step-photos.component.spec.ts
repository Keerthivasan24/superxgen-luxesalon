import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPhotosComponent } from './step-photos.component';

describe('StepPhotosComponent', () => {
  let component: StepPhotosComponent;
  let fixture: ComponentFixture<StepPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
