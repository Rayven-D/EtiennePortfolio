import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-expand',
  imports: [],
  templateUrl: './expand.html',
  styleUrl: './expand.scss',
})
export class Expand {
  @Input() public title: string = '';
  
  @Input() public isOpen: boolean = false;

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this._cdr.detectChanges();
  }

}
