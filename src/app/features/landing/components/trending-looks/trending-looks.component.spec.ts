import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingLooksComponent } from './trending-looks.component';

describe('TrendingLooksComponent', () => {
  let component: TrendingLooksComponent;
  let fixture: ComponentFixture<TrendingLooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingLooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingLooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
