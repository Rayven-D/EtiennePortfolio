import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  public projectsAnimationLoad: boolean[] = [false, false];
  public projec1Hover:boolean = false;
  public project2Hover:boolean = false;

  constructor(
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    
  }

  ngAfterViewInit(): void {
    this.projectsAnimationLoad.forEach((_, index) => {
        setTimeout(() => {
          this.projectsAnimationLoad[index] = true;
          this._cdr.detectChanges();
        }, 100 * (index === 0 ? .1 : index)); 
      });
  }
  
  public navigateToAbout(): void {
    this._router.navigate(['/about']);
  }

  public navigateToProject(project: string): void {
    this._router.navigate(['/projects', project]);
  }
}
