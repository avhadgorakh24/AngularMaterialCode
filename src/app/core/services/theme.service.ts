import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private currentTheme = 'blue-theme';

  private themes = [
    'blue-theme',
    'green-theme',
    'purple-theme',
    'teal-theme',
    'dark-theme'
  ];

  initTheme() {
    const saved = localStorage.getItem('app-theme');

    if (saved && this.themes.includes(saved)) {
      this.applyTheme(saved);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.applyTheme(prefersDark ? 'dark-theme' : this.currentTheme);
  }

  setTheme(theme: string) {
    if (!this.themes.includes(theme)) return;

    localStorage.setItem('app-theme', theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: string) {
    this.currentTheme = theme;

    this.themes.forEach(t => document.body.classList.remove(t));
    document.body.classList.add(theme);
  }

  currentThemeValue() {
    return this.currentTheme;
  }

}