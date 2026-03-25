import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-picture-carosel',
  imports: [],
  templateUrl: './picture-carosel.html',
  styleUrl: './picture-carosel.scss',
})
export class PictureCarosel {
  @Input() public images: string[] = [];

  @ViewChild('modal') modalTemplate: ElementRef | undefined;

  public currentIndex: number = 0;
  public hovering: boolean = false;


  public prev(){
    this.move(this.currentIndex - 1)
  }

  public next(){
    this.move(this.currentIndex + 1)
  }

  public move(direction: number){
    this.currentIndex = (direction + this.images.length) % this.images.length;
  }

  public openModal(): void {
    if(this.modalTemplate) {
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape')
          this.closeModal();
      });
      const modalElement = this.modalTemplate.nativeElement as HTMLElement;
      modalElement.classList.add('active');
    }
  }

  public closeModal(): void {
    if(this.modalTemplate) {
      const modalElement = this.modalTemplate.nativeElement as HTMLElement;
      modalElement.classList.remove('active');
    }
  }

}
