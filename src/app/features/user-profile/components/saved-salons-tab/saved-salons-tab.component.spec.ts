import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSalonsTabComponent } from './saved-salons-tab.component';

describe('SavedSalonsTabComponent', () => {
  let component: SavedSalonsTabComponent;
  let fixture: ComponentFixture<SavedSalonsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedSalonsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedSalonsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
