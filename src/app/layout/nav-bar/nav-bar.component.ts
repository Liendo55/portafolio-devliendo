import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SkillComponent } from '../../pages/skill/skill.component';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';
import { ExperienceComponent } from '../../pages/experience/experience.component';
import { TestimonyComponent } from '../../pages/testimony/testimony.component';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import translateEs from '../../../../public/i18n/es.json';
import translateEn from '../../../../public/i18n/en.json';

@Component({
  selector: 'app-nav-bar',
  imports: [
    FooterComponent,
    SkillComponent,
    AboutMeComponent,
    ExperienceComponent,
    TestimonyComponent,
    TranslatePipe,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export default class NavBarComponent {
  language: string = 'es';
  isEnglish: boolean = false;
  isLightTheme: boolean;

  themeSelected = inject(ThemeService);
  translateLanguage = inject(TranslateService);

  constructor() {
    this.isLightTheme = this.themeSelected.getCurrentTheme() === 'light';
    this.translateLanguage.setTranslation('en', translateEn);
    this.translateLanguage.setTranslation('es', translateEs);
    this.translateLanguage.setDefaultLang('es');
  }

  changeLanguage(): void {
    this.isEnglish = !this.isEnglish;
    this.translateLanguage.use(this.isEnglish ? 'en' : 'es');
    this.language = this.isEnglish ? 'en' : 'es';
  }

  changeTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    this.themeSelected.setDarkTheme(this.isLightTheme);
  }
}
