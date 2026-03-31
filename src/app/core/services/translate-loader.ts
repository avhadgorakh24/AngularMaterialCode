import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class CustomLoader implements TranslateLoader {

  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`assets/i18n/${lang}.json`, {
      headers: { 'Cache-Control': 'no-cache',
      }
    });
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new CustomLoader(http);
}