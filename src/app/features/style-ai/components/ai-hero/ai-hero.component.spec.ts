import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiHeroComponent } from './ai-hero.component';

describe('AiHeroComponent', () => {
  let component: AiHeroComponent;
  let fixture: ComponentFixture<AiHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
