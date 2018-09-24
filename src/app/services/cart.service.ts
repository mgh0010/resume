import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  chosenSkills = ['Web Dev'];
  chosenAttributes = ['Efficient'];

  constructor() {console.log(this.numItemsInCart()); }

  numItemsInCart() {
    return this.chosenSkills.length + this.chosenAttributes.length;
  }

  addSkill(skill) {
    this.chosenSkills.push(skill);
  }

  addAttribute(attr) {
    this.chosenAttributes.push(attr);
  }

  removeAttribute(attr_to_remove: string) {
    let index = 0;
    for (const attr of this.chosenAttributes) {
      if (attr === attr_to_remove) {
        this.chosenAttributes.splice(index, 1);
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
