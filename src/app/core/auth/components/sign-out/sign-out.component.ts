import { Component } from '@angular/core';
import { AuthService } from '@app/core/auth/state/auth.service';
import { AppQuery } from '@app/state/app.query';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent {
  authUser$ = this.appQuery.user$;

  constructor(private authService: AuthService, private appQuery: AppQuery) {}

  logout() {
    this.authService.signOut();
  }
}
