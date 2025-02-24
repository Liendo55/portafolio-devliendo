import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SkillComponent } from '../../pages/skill/skill.component';
import { AboutMeComponent } from '../../pages/about-me/about-me.component';

@Component({
  selector: 'app-nav-bar',
  imports: [FooterComponent, SkillComponent, AboutMeComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export default class NavBarComponent {}
