import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  setDarkTheme(isLight: boolean): void {
    document.documentElement.setAttribute('data-theme', isLight ? 'light' : '');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  getCurrentTheme(): string {
    return localStorage.getItem('theme') || 'dark';
  }
}
