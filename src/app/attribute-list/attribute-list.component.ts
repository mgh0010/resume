import {AfterViewInit, Component, OnInit} from '@angular/core';
import { MichaelService } from '../services/michael.service';
import { CartService } from '../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit, AfterViewInit {

  constructor(public ms: MichaelService,
              public cs: CartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.reselectChosenAttributes();
  }

  reselectChosenAttributes() {
    for (const attr of this.ms.attributes()) {
      if (this.cs.chosenAttritubes.includes(attr)) {
        $('#' + this.takeAwaySpaces(attr)).addClass('selected');
      }
    }
  }

  toggleAttributeSelect(attr) {
    // get the attr object
    const attr_object = $('#' + this.takeAwaySpaces(attr));
    if (this.cs.chosenAttritubes.includes(attr)) {
      // remove the selected class
      attr_object.removeClass('selected');
      // remove the attr from the attr list
      this.cs.removeAttribute(attr);
    } else {
      // add the selected class
      attr_object.addClass('selected');
      // add the attr to the attr list
      this.cs.addAttribute(attr);
    }
  }

  takeAwaySpaces(str: string) {
    return str.replace(/ /g, '');
  }

}
