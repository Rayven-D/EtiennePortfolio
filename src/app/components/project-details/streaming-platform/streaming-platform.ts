import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PictureCarosel } from '../../../shared/components/picture-carosel/picture-carosel';

@Component({
  selector: 'app-streaming-platform',
  imports: [PictureCarosel],
  templateUrl: './streaming-platform.html',
  styleUrl: './streaming-platform.scss',
})
export class StreamingPlatform {

  public phase2Images: string[] = [
    'assets/images/streaming-platform/phase2/phase2_1.png',
    'assets/images/streaming-platform/phase2/phase2_2.png',
    'assets/images/streaming-platform/phase2/phase2_3.png',
    'assets/images/streaming-platform/phase2/phase2_4.png',
    'assets/images/streaming-platform/phase2/phase2_5.png',
    'assets/images/streaming-platform/phase2/phase2_6.png',
    'assets/images/streaming-platform/phase2/phase2_7.png',
    'assets/images/streaming-platform/phase2/phase2_8.png'
  ]

  public phase4Images: string[] = [
    'assets/images/streaming-platform/phase4/phase4_1.png',
    'assets/images/streaming-platform/phase4/phase4_2.png',
    'assets/images/streaming-platform/phase4/phase4_3.png',
    'assets/images/streaming-platform/phase4/phase4_4.png'
  ]

  public phase5Images: string[] = [
    'assets/images/streaming-platform/phase5/phase5_img1.png',
    'assets/images/streaming-platform/phase5/phase5_img2.png',
    'assets/images/streaming-platform/phase5/phase5_img3.png',
    'assets/images/streaming-platform/phase5/phase5_img4.png',
    'assets/images/streaming-platform/phase5/phase5_img5.png',
    'assets/images/streaming-platform/phase5/phase5_img6.png'
  ]

  constructor(
    private _router: Router
  ) {}

  public navigateToProjects(): void {
    this._router.navigate(['projects']);
  }
}
