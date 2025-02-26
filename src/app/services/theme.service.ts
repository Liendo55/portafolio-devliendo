import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  setDarkTheme(isDark: boolean): void {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  getCurrentTheme(): string {
    return localStorage.getItem('theme') || 'light';
  }
}
