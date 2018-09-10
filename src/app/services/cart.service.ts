import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  chosenSkills = [];
  chosenAttritubes = [];

  constructor() { }

  addSkill(skill) {
    this.chosenSkills.push(skill);
  }

  addAttribute(attr) {
    this.chosenAttritubes.push(attr);
  }

  removeAttribute(attr_to_remove: string) {
    let index = 0;
    for (const attr of this.chosenAttritubes) {
      if (attr === attr_to_remove) {
        this.chosenAttritubes.splice(index, 1);
      }
      ++index;
    }
  }

  removeSkill(skill_to_remove: string) {
    let index = 0;
    for (const skill of this.chosenSkills) {
      if (skill === skill_to_remove) {
        this.chosenSkills.splice(index, 1);
      }
      ++index;
    }
  }
}
