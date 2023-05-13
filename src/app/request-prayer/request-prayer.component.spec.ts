import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPrayerComponent } from './request-prayer.component';

describe('RequestPrayerComponent', () => {
  let component: RequestPrayerComponent;
  let fixture: ComponentFixture<RequestPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPrayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
