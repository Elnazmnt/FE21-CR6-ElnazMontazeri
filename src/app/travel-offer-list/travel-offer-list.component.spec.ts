import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOfferListComponent } from './travel-offer-list.component';

describe('TravelOfferListComponent', () => {
  let component: TravelOfferListComponent;
  let fixture: ComponentFixture<TravelOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelOfferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
