import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
        
      },
      {
        path: 'users',
        loadComponent: () => import('./features/users/users.component').then(m => m.UsersComponent)
      },
      {
       path: 'loans',
        loadComponent: () => import('./features/loans-create-profile/loans-create-profile').then(m => m.LoansCreateProfile) 
      }  ,
      {
       path: 'loan-type',
        loadComponent: () => import('./features/loan-type/loan-type').then(m => m.LoanType) 
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
