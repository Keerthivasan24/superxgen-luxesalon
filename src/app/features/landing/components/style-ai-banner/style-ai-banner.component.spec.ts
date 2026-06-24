import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAiBannerComponent } from './style-ai-banner.component';

describe('StyleAiBannerComponent', () => {
  let component: StyleAiBannerComponent;
  let fixture: ComponentFixture<StyleAiBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleAiBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleAiBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
