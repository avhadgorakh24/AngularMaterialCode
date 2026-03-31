import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  templateUrl: './theme-selector.html',
  styleUrls: ['./theme-selector.css']
})
export class ThemeSelector {

  constructor(public themeService: ThemeService) {}

  themes = [
    { name: 'Blue', value: 'blue-theme', color: '#3f51b5' },
    { name: 'Green', value: 'green-theme', color: '#4caf50' },
    { name: 'Purple', value: 'purple-theme', color: '#9c27b0' },
    { name: 'Teal', value: 'teal-theme', color: '#009688' },
    { name: 'Dark Mode', value: 'dark-theme', color: '#222' }
  ];

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

}