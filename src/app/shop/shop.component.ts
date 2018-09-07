import { Component, OnInit } from '@angular/core';
import { MichaelService } from '../services/michael.service';

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor( public ms: MichaelService) { }

  ngOnInit() {
  }

  toggleSkillSelect(id) {
    const skill = $('#' + id);
    if (skill.hasClass('selected')) {
      skill.removeClass('selected');
    } else {
      skill.addClass('selected');
    }
  }

}
