import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  chosenSkills = [];

  constructor() { }

  addSkill(skill) {
    this.chosenSkills.push(skill);
    console.log(this.chosenSkills);
  }

  removeSkill(skill_to_remove: string) {
    let index = 0;
    for (const skill of this.chosenSkills) {
      if (skill === skill_to_remove) {
        this.chosenSkills.splice(skill, index);
      }
      ++index;
    }

  }
}
