import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('etienne-portfolio');
  public currentPage = 0;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {

    this._router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      if(e.url === "home") {
        this.currentPage = 0;
      } else if(e.url.includes("/projects")) {
        this.currentPage = 1;
      } else if(e.url === "/about") {
        this.currentPage = 2;
      }else{
        this.currentPage = 0;
      }
    });
  }

  public navigateTo(path: string): void {
    console.log('here')
    this._router.navigate([path]);
  }
}
