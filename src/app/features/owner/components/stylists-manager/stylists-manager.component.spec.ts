import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistsManagerComponent } from './stylists-manager.component';

describe('StylistsManagerComponent', () => {
  let component: StylistsManagerComponent;
  let fixture: ComponentFixture<StylistsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylistsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylistsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
