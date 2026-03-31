import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsentDialog } from '../../shared/components/consent-dialog/consent-dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-loan-type',
  imports: [CommonModule],
  templateUrl: './loan-type.html',
  styleUrl: './loan-type.css',
})
export class LoanType {
constructor(private dialog: MatDialog) {}

  applyNow(loan: any) {
    const dialogRef = this.dialog.open(ConsentDialog, {
      width: '500px',
      disableClose: true,
      data: loan 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // ✅ User clicked Agree
        console.log('User accepted consent',loan);
      } else {
        console.log('User cancelled');
      }
    });
  }






  loanTypes = [
    {
      icon: '🏢',
      title: 'MSME Loan',
      description: 'Loan Application Above INR 10 Lakhs'
    },
    {
      icon: '₹',
      title: 'Mudra Loan',
      description: 'Loan up to INR 10 Lakhs'
    },
    {
      icon: '₹',
      title: 'SME Finance For CA Firms',
      description: 'Loan up to INR 1 Crore'
    },
    {
      icon: '🏢',
      title: 'MSME Loan',
      description: 'In-principal Approval up to INR 5 Crore'
    },
    {
      icon: '🚚',
      title: 'Commercial Vehicle Loan',
      description: 'Loan up to INR 5 Crore'
    }
  ];

}
