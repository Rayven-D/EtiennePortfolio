import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  public skills : {skillName: string, level: number}[] = [
    {skillName: 'SKILL_1', level: 67},
    {skillName: 'SKILL_2', level: 69},
    {skillName: 'SKILL_3', level: 40},
    {skillName: 'SKILL_4', level: 80},
    
  ];
}
