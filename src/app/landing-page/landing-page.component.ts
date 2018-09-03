import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#hi').removeClass('hide');
    $('#hi').addClass('flipInX');

    setTimeout(() => {
      $('#find-help').removeClass('hide');
      $('#find-help').addClass('flipInX');
    }, 2000);
  }

}
