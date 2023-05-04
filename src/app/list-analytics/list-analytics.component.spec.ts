import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnalyticsComponent } from './list-analytics.component';

describe('ListAnalyticsComponent', () => {
  let component: ListAnalyticsComponent;
  let fixture: ComponentFixture<ListAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
