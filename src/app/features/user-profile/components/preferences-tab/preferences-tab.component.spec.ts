import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesTabComponent } from './preferences-tab.component';

describe('PreferencesTabComponent', () => {
  let component: PreferencesTabComponent;
  let fixture: ComponentFixture<PreferencesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreferencesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
