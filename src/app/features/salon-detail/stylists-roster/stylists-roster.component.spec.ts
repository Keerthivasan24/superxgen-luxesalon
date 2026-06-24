import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistsRosterComponent } from './stylists-roster.component';

describe('StylistsRosterComponent', () => {
  let component: StylistsRosterComponent;
  let fixture: ComponentFixture<StylistsRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylistsRosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylistsRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
