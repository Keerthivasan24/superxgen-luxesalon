import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAiPageComponent } from './style-ai-page.component';

describe('StyleAiPageComponent', () => {
  let component: StyleAiPageComponent;
  let fixture: ComponentFixture<StyleAiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleAiPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleAiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
