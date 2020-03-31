import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppQuery } from '@app/state/app.query';
import { AppStore } from '@app/state/app.store';

@Injectable({
  providedIn: 'root',
})
export class AppTranslateService {
  constructor(private translate: TranslateService, private appQuery: AppQuery, private appStore: AppStore) {}

  public changeTranslate(lang: string): void {
    this.translate.use(lang);
    this.appStore.update(state => ({ ...state, ui: lang }));
    localStorage.setItem('lang', lang);
  }

  public setDefaultLang(): void {
    this.translate.setDefaultLang(this.defaultLang);
  }

  private get defaultLang(): string {
    const defaultLang: string = localStorage.getItem('lang');

    return defaultLang ? defaultLang : this.appQuery.getValue().ui.lang;
  }
}
