import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCarosel } from './picture-carosel';

describe('PictureCarosel', () => {
  let component: PictureCarosel;
  let fixture: ComponentFixture<PictureCarosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureCarosel],
    }).compileComponents();

    fixture = TestBed.createComponent(PictureCarosel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
