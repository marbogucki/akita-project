import { QueryEntity } from "@datorama/akita";
import {
  DriversState,
  DriversStore,
} from "@app/feature/drivers/state/drivers.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DriversQuery extends QueryEntity<DriversState> {
  constructor(protected store: DriversStore) {
    super(store);
  }
}
