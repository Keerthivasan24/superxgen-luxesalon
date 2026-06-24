import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyInfoBarComponent } from './sticky-info-bar.component';

describe('StickyInfoBarComponent', () => {
  let component: StickyInfoBarComponent;
  let fixture: ComponentFixture<StickyInfoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StickyInfoBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickyInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
