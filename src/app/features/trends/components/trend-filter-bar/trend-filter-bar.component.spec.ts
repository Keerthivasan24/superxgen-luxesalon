import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendFilterBarComponent } from './trend-filter-bar.component';

describe('TrendFilterBarComponent', () => {
  let component: TrendFilterBarComponent;
  let fixture: ComponentFixture<TrendFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendFilterBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
