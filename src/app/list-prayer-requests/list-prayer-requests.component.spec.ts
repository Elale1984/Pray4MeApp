import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrayerRequestsComponent } from './list-prayer-requests.component';

describe('ListPrayerRequestsComponent', () => {
  let component: ListPrayerRequestsComponent;
  let fixture: ComponentFixture<ListPrayerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrayerRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrayerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
