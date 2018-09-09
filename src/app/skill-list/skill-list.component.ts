import { Component, OnInit } from '@angular/core';
import { MichaelService } from '../services/michael.service';
import { CartService } from '../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  constructor( public ms: MichaelService,
               public cs: CartService) { }

  ngOnInit() {
  }

  toggleSkillSelect(skill_name) {
    // get the skill object
    const skill_object = $('#' + skill_name + '-id');
    console.log('#' + skill_name + '-id');
    if (skill_object.hasClass('selected')) {
      // remove the selected class
      skill_object.removeClass('selected');
      // remove the skill from the skill list
      this.cs.removeSkill(skill_name);
    } else {
      // add the selected class
      skill_object.addClass('selected');
      // add the skill to the skill list
      this.cs.addSkill(skill_name);
    }
  }

  takeAwaySpaces(skill: string) {
    return skill.replace(/ /g, '');
  }

}
