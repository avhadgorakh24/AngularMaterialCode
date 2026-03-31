import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeSelector } from '../../shared/components/theme-selector/theme-selector';
import { Language } from '../../core/services/language';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule, ThemeSelector, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<void>();

  public themeService = inject(ThemeService);
  public languageService = inject(Language);

}