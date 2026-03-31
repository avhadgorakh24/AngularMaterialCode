import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  @Input() isCollapsed = false;

  navLinks = [
    { path: '/users', label: 'Profile', icon: 'people' },
    { path: '/loans', label: 'Loans', icon: 'account_balance' },
    { path: '/monitoring', label: 'Monitoring', icon: 'monitoring' },
    { path: '/users', label: 'Bureau Report', icon: 'description' },
  ];

  onLogout(): void {
    console.log('Logging out...');
  }
}