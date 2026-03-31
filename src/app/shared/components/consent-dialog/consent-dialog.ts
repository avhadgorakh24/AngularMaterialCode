import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consent-dialog',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatButtonModule,FormsModule],
  templateUrl: './consent-dialog.html',
  styleUrl: './consent-dialog.css',
})
export class ConsentDialog {

  isChecked = false;

  constructor(private dialogRef: MatDialogRef<ConsentDialog>) { }

  onAgree() {
    if (this.isChecked) {
      this.dialogRef.close(true);
    }
  }

}
