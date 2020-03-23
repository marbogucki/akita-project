import { DriversStore } from '@app/feature/drivers/state/drivers.store';

describe('DriversStore', () => {
  let driversStore: DriversStore;

  beforeEach(() => {
    driversStore = new DriversStore();
  });

  it('should be created', () => {
    expect(driversStore).toBeTruthy();
  });
});
