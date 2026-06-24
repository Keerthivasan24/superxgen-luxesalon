import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDetailPageComponent } from './salon-detail-page.component';

describe('SalonDetailPageComponent', () => {
  let component: SalonDetailPageComponent;
  let fixture: ComponentFixture<SalonDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalonDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalonDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
