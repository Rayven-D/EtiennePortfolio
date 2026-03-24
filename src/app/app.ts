import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('etienne-portfolio');

  constructor(
    private _router: Router
  ) {}

  public navigateTo(path: string): void {
    console.log('here')
    this._router.navigate([path]);
  }
}
