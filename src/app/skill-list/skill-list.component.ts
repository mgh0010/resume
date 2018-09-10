import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MichaelService} from '../services/michael.service';
import {CartService} from '../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit, AfterViewInit {

  constructor( public ms: MichaelService,
               public cs: CartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.reselectChosenSkills();
  }

  reselectChosenSkills() {
    for (const skill_id of this.ms.skillIds()) {
      if (this.cs.chosenSkills.includes(this.ms.getSkillName(skill_id))) {
        $('#' + skill_id).addClass('selected');
      }
    }
  }

  toggleSkillSelect(skill_id) {
    // get the skill object
    const skill_object = $('#' + skill_id);
    if (this.cs.chosenSkills.includes(this.ms.getSkillName(skill_id))) {
      // remove the selected class
      skill_object.removeClass('selected');
      // remove the skill from the skill list
      this.cs.removeSkill(this.ms.getSkillName(skill_id));
    } else {
      // add the selected class
      skill_object.addClass('selected');
      // add the skill to the skill list
      this.cs.addSkill(this.ms.getSkillName(skill_id));
    }
  }


}
