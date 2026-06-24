import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGalleryComponent } from './style-gallery.component';

describe('StyleGalleryComponent', () => {
  let component: StyleGalleryComponent;
  let fixture: ComponentFixture<StyleGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
