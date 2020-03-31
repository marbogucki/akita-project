import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AUTH_USER_KEY, AuthUser } from '@app/core/auth/models/auth';
import { AppState } from '@app/core/auth/models/app';

const currentAuthUser: () => AuthUser = () => JSON.parse(localStorage.getItem(AUTH_USER_KEY)) || null;

const initialState: AppState = {
  ui: {
    lang: 'en',
    loading: false,
  },
  user: currentAuthUser(),
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(initialState);
  }
}
