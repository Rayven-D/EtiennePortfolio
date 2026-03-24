import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(
    private _router: Router
  ) {

  }
  
  public navigateToAbout(): void {
    this._router.navigate(['/about']);
  }
}
