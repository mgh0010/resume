import { Component, OnInit } from '@angular/core';
import { MichaelService } from '../services/michael.service';
import { CartService } from '../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {

  constructor(public ms: MichaelService,
              public cs: CartService) { }

  ngOnInit() {
    this.reselectChosenSkills();
  }

  reselectChosenSkills() {
    let i = 0;
  }

  toggleAttributeSelect(attr) {
    // get the skill object
    const skill_object = $('#' + attr);
    if (this.cs.chosenSkills.includes(this.ms.getSkillName(attr))) {
      // remove the selected class
      skill_object.removeClass('selected');
      // remove the skill from the skill list
      this.cs.removeSkill(this.ms.getSkillName(attr));
    } else {
      // add the selected class
      skill_object.addClass('selected');
      // add the skill to the skill list
      this.cs.addSkill(this.ms.getSkillName(attr));
    }
  }

  takeAwaySpaces(skill: string) {
    return skill.replace(/ /g, '');
  }

}
