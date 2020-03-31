import { Component, OnInit } from '@angular/core';
import { AppTranslateService } from '@app/state/app-translate.service';
import { AppQuery } from '@app/state/app.query';
import { AuthService } from '@app/core/auth/state/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'akita-project';
  authUser$ = this.appQuery.user$;

  constructor(
    private appTranslate: AppTranslateService,
    private appQuery: AppQuery,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.appTranslate.setDefaultLang();
  }

  changeLanguage(lang: string) {
    this.appTranslate.changeTranslate(lang);
  }

  logout() {
    this.authService.signOut();
  }
}
