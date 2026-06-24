import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVisualComponent } from './auth-visual.component';

describe('AuthVisualComponent', () => {
  let component: AuthVisualComponent;
  let fixture: ComponentFixture<AuthVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
