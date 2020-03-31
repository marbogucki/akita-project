import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppQuery } from '@app/state/app.query';
import { AuthUser } from '@app/core/auth/models/auth';

@Injectable({ providedIn: 'root' })
export class IsAuthGuard implements CanActivate {
  constructor(private appQuery: AppQuery, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authUser: Partial<AuthUser> = this.appQuery.getValue().user;

    if (!authUser) {
      return true;
    }

    this.router.navigateByUrl('/drivers');
    return false;
  }
}
