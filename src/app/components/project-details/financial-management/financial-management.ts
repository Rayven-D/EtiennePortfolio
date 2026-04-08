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
    'assets/images/financial-management/onboarding/onboarding_1.png',
    'assets/images/financial-management/onboarding/onboarding_2.png',
    'assets/images/financial-management/onboarding/onboarding_3.png',
  ]

  constructor(
    private _router: Router
  ) {}

  public navigateToProjects(): void {
    this._router.navigate(['projects']);
  }

  public navigateToFigma(): void {
    window.open('https://www.figma.com/proto/rbssrVfTqvBhvfLBrTsOYC/UI2-Project-6--Wireframes?node-id=110-187&t=mdAALpMKUvRlKlIC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=110%3A187&show-proto-sidebar=1', '_blank');
  }
}
