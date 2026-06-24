import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiLoadingComponent } from './ai-loading.component';

describe('AiLoadingComponent', () => {
  let component: AiLoadingComponent;
  let fixture: ComponentFixture<AiLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
