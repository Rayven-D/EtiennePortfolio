import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  constructor(
    private _router: Router
  ) {}

  public navigateToProject(projectId: string): void {
    this._router.navigate([`projects/${projectId}`]);
  }
}
