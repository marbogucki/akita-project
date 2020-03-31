import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AppQuery } from '@app/state/app.query';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let routerSpy: Router;
  let appQuerySpy: AppQuery;
  let nextSpy: ActivatedRouteSnapshot;
  let stateSpy: RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigateByUrl']),
        },
        {
          provide: ActivatedRouteSnapshot,
          useValue: jasmine.createSpyObj('ActivatedRouteSnapshot', ['data']),
        },
        {
          provide: RouterStateSnapshot,
          useValue: jasmine.createSpyObj('RouterStateSnapshot', ['toString']),
        },
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    routerSpy = TestBed.inject(Router);
    appQuerySpy = TestBed.inject(AppQuery);
    nextSpy = TestBed.inject(ActivatedRouteSnapshot);
    stateSpy = TestBed.inject(RouterStateSnapshot);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true if authUser exists', () => {
    spyOn(appQuerySpy, 'getValue').and.returnValue({
      ui: { lang: 'en', loading: false },
      user: { id: 2, username: 'John' },
    });
    expect(authGuard.canActivate(nextSpy, stateSpy)).toBeTrue();
  });

  it('should return false if authUser is equal null', () => {
    spyOn(appQuerySpy, 'getValue').and.returnValue({
      ui: { lang: 'en', loading: false },
      user: null,
    });
    expect(authGuard.canActivate(nextSpy, stateSpy)).toBeFalse();
  });

  it('should route to login page if authUser is equal null', () => {
    spyOn(appQuerySpy, 'getValue').and.returnValue({
      ui: { lang: 'en', loading: false },
      user: null,
    });

    authGuard.canActivate(nextSpy, stateSpy);
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/auth/login');
  });
});
