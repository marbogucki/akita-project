import { TestBed } from '@angular/core/testing';
import { DriversQuery } from '@app/feature/drivers/state/drivers.query';
import { DriversStore } from '@app/feature/drivers/state/drivers.store';

describe('DriversQuery', () => {
  let driversQuery: DriversQuery;
  let driversStore: DriversStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    driversQuery = TestBed.inject(DriversQuery);
    driversStore = TestBed.inject(DriversStore);
  });

  it('should be created', () => {
    expect(driversQuery).toBeTruthy();
  });
});
