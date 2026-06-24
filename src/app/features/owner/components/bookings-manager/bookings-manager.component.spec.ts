import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsManagerComponent } from './bookings-manager.component';

describe('BookingsManagerComponent', () => {
  let component: BookingsManagerComponent;
  let fixture: ComponentFixture<BookingsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingsManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
