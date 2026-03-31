import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>User Management</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Manage your application users here.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container { padding: 24px; }
  `]
})
export class UsersComponent {}
