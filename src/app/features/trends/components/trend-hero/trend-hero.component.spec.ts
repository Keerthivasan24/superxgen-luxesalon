import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendHeroComponent } from './trend-hero.component';

describe('TrendHeroComponent', () => {
  let component: TrendHeroComponent;
  let fixture: ComponentFixture<TrendHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
