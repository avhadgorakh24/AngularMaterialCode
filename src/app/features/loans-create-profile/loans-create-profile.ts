import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans-create-profile',
  imports: [],
  templateUrl: './loans-create-profile.html',
  styleUrl: './loans-create-profile.css',
})
export class LoansCreateProfile {

    constructor(private router: Router) {}

  createProfile() {
        this.router.navigate(['/loan-type']);

  }
}
