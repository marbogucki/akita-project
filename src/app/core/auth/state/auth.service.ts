import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTH_USER_KEY, AuthUser, Credentials } from '@app/core/auth/models/auth';
import { HttpService } from '@app/core/serivces/http.service';
import { AppStore } from '@app/state/app.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService, private appStore: AppStore, private router: Router) {}

  public signIn(credentials: Credentials): Observable<Partial<AuthUser>> {
    return this.httpService.add<Partial<AuthUser>>('/users/authenticate', credentials).pipe(
      tap((user: AuthUser) => {
        this.appStore.update(state => ({ ...state, user }));
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      })
    );
  }

  public signOut(): void {
    this.appStore.update(state => ({ ...state, user: null }));
    localStorage.removeItem(AUTH_USER_KEY);
    this.router.navigateByUrl('/auth/login');
  }
}
