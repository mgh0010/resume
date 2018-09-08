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
    const skill_object = $('#' + skill_name + '-id');
    console.log('#' + skill_name + '-id');
    if (skill_object.hasClass('selected')) {
      skill_object.removeClass('selected');
      this.cs.removeSkill(skill_name);
    } else {
      skill_object.addClass('selected');
      this.cs.addSkill(skill_name);
    }
  }

}
