import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStore } from '@app/state/app.store';
import { AppState } from '@app/core/auth/models/app';
import { AuthUser } from '@app/core/auth/models/auth';

@Injectable({ providedIn: 'root' })
export class AppQuery extends Query<AppState> {
  user$: Observable<Partial<AuthUser>> = this.select(state => state.user);

  constructor(protected store: AppStore) {
    super(store);
  }
}
