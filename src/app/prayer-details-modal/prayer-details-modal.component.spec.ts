import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerDetailsModalComponent } from './prayer-details-modal.component';

describe('PrayerDetailsModalComponent', () => {
  let component: PrayerDetailsModalComponent;
  let fixture: ComponentFixture<PrayerDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
