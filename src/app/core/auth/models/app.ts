import { AuthUser } from '@app/core/auth/models/auth';

export interface AppState {
  ui: AppUiState;
  user: Partial<AuthUser>;
}

export interface AppUiState {
  lang: string;
  loading: boolean;
}
