import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-carosel',
  imports: [],
  templateUrl: './picture-carosel.html',
  styleUrl: './picture-carosel.scss',
})
export class PictureCarosel {
  @Input() public images: string[] = [];

  public currentIndex: number = 0;


  public prev(){
    this.move(this.currentIndex - 1)
  }

  public next(){
    this.move(this.currentIndex + 1)
  }

  public move(direction: number){
    this.currentIndex = (direction + this.images.length) % this.images.length;
  }

}
