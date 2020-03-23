import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Driver } from '@app/feature/drivers/models/driver';
import { Injectable } from '@angular/core';

export interface DriversState extends EntityState<Driver> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'drivers' })
export class DriversStore extends EntityStore<DriversState> {
  constructor() {
    super();
  }
}
