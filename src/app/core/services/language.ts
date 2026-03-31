import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  
 private translate = inject(TranslateService);
  private STORAGE_KEY = 'app-lang';

  private supportedLangs = ['en', 'hi', 'mr'];

  constructor() {

    const savedLang = localStorage.getItem(this.STORAGE_KEY);

    const browserLang = this.translate.getBrowserLang()?.toLowerCase() ?? 'en';

    const defaultLang =
      savedLang ||
      (this.supportedLangs.includes(browserLang) ? browserLang : 'en');

    this.translate.setDefaultLang('en');
    this.translate.use(defaultLang);

  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  getCurrentLang(): string {
    return this.translate.currentLang || 'en'; // ✅ FIX
  }


}
