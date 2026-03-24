import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  public projec1Hover:boolean = false;

  constructor(
    private _router: Router
  ) {

  }
  
  public navigateToAbout(): void {
    this._router.navigate(['/about']);
  }

  public navigateToProject(project: string): void {
    this._router.navigate(['/projects', project]);
  }
}
