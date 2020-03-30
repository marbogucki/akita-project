import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AppState, AppStore } from '@app/state/app.store';

@Injectable({ providedIn: 'root' })
export class AppQuery extends QueryEntity<AppState> {
  constructor(protected store: AppStore) {
    super(store);
  }
}
