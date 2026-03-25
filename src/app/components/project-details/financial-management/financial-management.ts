import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-management',
  imports: [],
  templateUrl: './financial-management.html',
  styleUrl: './financial-management.scss',
})
export class FinancialManagement {

  constructor(
    private _router: Router
  ) {}

  public navigateToProjects(): void {
    this._router.navigate(['projects']);
  }
}
