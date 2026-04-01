import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  public skills : {skillName: string, level: number}[] = [
    {skillName: 'Creative Problem-Solving', level: 90},
    {skillName: 'Feedback-Driven', level: 90},
    {skillName: 'Visual & UX Foundations', level: 85},
    {skillName: 'Interaction & Prototyping', level: 85},
    {skillName: 'Information Architecture', level: 85},
    {skillName: 'Usability Focus', level: 75}
  ];
}
