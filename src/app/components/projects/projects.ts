import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit {

  public projectsAnimationLoad: boolean[] = [false, false];

  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.projectsAnimationLoad.forEach((_, index) => {
        setTimeout(() => {
          this.projectsAnimationLoad[index] = true;
          this._cdr.detectChanges();
        }, 150 * (index + 1)); 
      });
  }

  public navigateToProject(projectId: string): void {
    this._router.navigate([`projects/${projectId}`]);
  }
}
