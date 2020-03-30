import { Component, OnInit } from '@angular/core';
import { AppStore } from '@app/state/app.store';
import { AppTranslateService } from '@app/state/app-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'akita-project';

  constructor(
    private appTranslate: AppTranslateService,
    private appStore: AppStore
  ) {}

  ngOnInit(): void {
    this.appTranslate.setDefaultLang();
  }

  changeLanguage(lang: string) {
    this.appTranslate.changeTranslate(lang);
  }
}
