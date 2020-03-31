export const AUTH_USER_KEY = 'auth-user';

export interface Credentials {
  login: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
