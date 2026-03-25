import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PictureCarosel } from '../../../shared/components/picture-carosel/picture-carosel';
import { Expand } from '../../../shared/components/expand/expand';

@Component({
  selector: 'app-financial-management',
  imports: [PictureCarosel, Expand],
  templateUrl: './financial-management.html',
  styleUrl: './financial-management.scss',
})
export class FinancialManagement {

  public phase5Images: string[] = [
    'assets/images/financial-management/phase5/phase5_1.png',
    'assets/images/financial-management/phase5/phase5_2.png',
    'assets/images/financial-management/phase5/phase5_3.png',
    'assets/images/financial-management/phase5/phase5_4.png',
  ]

  constructor(
    private _router: Router
  ) {}

  public navigateToProjects(): void {
    this._router.navigate(['projects']);
  }
}
