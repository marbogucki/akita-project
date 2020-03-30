import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface AppState extends EntityState<AppUiState> {
  ui: {
    lang: string;
  };
}

const initialState: EntityState<AppUiState> = {
  ui: {
    lang: 'en',
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
export class AppStore extends EntityStore<AppState> {
  constructor() {
    super(initialState);
  }
}

export interface AppUiState {
  lang: string;
}
